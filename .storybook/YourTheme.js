import { create } from '@storybook/theming';
import BrandLogo from "../images/brandlogo.png";
export default create({
    base: 'light',
    brandTitle: 'Jegans storybook',
    brandUrl: '#',
    brandImage: BrandLogo,
    brandTarget: '_self',
});