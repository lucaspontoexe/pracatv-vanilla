        function enter() {
            const root = document.documentElement;
            const imaginaryStrip = document.querySelector('.imaginary-strip');
            const imaginaryText = imaginaryStrip.querySelector('span');
            const topbarText = document.querySelector('.heading');
            const bottombarText = document.querySelector('.description');
            let topbarInput = document.querySelector('#insert_top').value;
            let bottombarInput = document.querySelector('#insert_bottom').value;

            imaginaryText.innerText = topbarInput;
            topbarText.innerText = topbarInput;
            bottombarText.innerText = bottombarInput;
            root.style.setProperty('--topbar-width', imaginaryStrip.offsetWidth + "px");

            for (element of document.querySelector('.overlay').children) {
                if (element.classList.contains('leave')) element.classList.replace("leave", "enter");
                else element.classList.add("enter");
            }
        }

        function leave() {
            for (element of document.querySelector('.overlay').children) {
                element.classList.replace("enter", "leave");
            }
        }

        function setAccentColor(color) {
            const root = document.documentElement;
            root.style.setProperty('--accent-color', color);
        }
                
        function updateClock() {
            const clock = document.querySelector('.clock span');
            const date = new Date();
            clock.innerText = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
        }

        function addZero(number) {
            return number < 10 ? '0' + number : number;
        }
        setInterval(updateClock, 1000);
    