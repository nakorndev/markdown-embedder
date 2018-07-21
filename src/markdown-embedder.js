import axios from 'axios';
import showdown from 'showdown';
import './spinner.css';

Array.prototype.forEach.call(document.getElementsByClassName('g-embed'), element => {
    let setLoading = new Promise((resolve, reject) => {
        element.classList.add('g-embed-spinner');
        resolve();
    });
    let converter = (text) => {
        return new Promise((resolve, reject) => {
            let converted = new showdown.Converter({disableForced4SpacesIndentedSublists: true}).makeHtml(text);
            resolve(converted);
        });
    }
    setLoading.then(() => {
        axios.get(element.getAttribute('data-url'))
            .then(response => {
                converter(response.data).then(md => {
                    element.classList.remove('g-embed-spinner');
                    element.innerHTML = md;
                });
            })
            .catch(error => {
                console.log(error);
            });
    });
});
