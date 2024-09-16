import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
    const images = block.querySelectorAll('picture');
    images.forEach((image, i) => {
        const showClass = 'show';
        if (!i) {
            image.classList.add(showClass);
        }

        image.addEventListener('click', (e)=> {
            const target = e.target.parentNode;
            const nextPicture = (target.nextElementSibling) ?
                target.nextElementSibling : target.parentNode.children[0]

            target.classList.remove(showClass);
            nextPicture.classList.add(showClass);
        })
    })
}
