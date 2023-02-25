const pwds = document.querySelectorAll('input[type="password"]');
pwds.forEach(password => {
    password.addEventListener('keyup', () => {
        const pwd = document.querySelector('#pwd');
        const confPwd = document.querySelector('#confirm');
        const listItem = document.querySelector('.error-msg');
        const check = document.querySelector('.message');

        if (pwd.value !== confPwd.value) {
            if (!check) {
                pwd.classList.add('error');
                confPwd.classList.add('error');

                const error = document.createElement('p');
                error.classList.add('message');
                error.textContent = '* Passwords do not match';

                listItem.appendChild(error);
            }           
        } else {
            pwd.classList.remove('error');
            confPwd.classList.remove('error');
            const error = document.querySelector('.message');
            listItem.removeChild(error);
        }
    });
});