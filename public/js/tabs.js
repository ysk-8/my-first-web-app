// ここからコードを書いてください
export function setupTabs() {

    const home = document.querySelector('[data-tab="home"]');
    const converter = document.querySelector('[data-tab="converter"]');
    const homeElement = document.getElementById('home');
    const converterElement = document.getElementById('converter');

    home.addEventListener('click', () => {
        converterElement.classList.add('hidden');
        homeElement.classList.remove('hidden');
    });

    converter.addEventListener('click', () => {
        homeElement.classList.add('hidden');
        converterElement.classList.remove('hidden');
    });

}