import { Carousel } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2-buttons';

(window as any).default = (): void => {

    (window as TemplateFunction).getThumpImage = (index: number) => {
        const birds: string[] = ['cardinal', 'hunei', 'costa-rica', 'kaohsiung', 'bee-eater'];
        return `src/carousel/images/${birds[index]}.png`;
    };
    interface TemplateFunction extends Window {
        getThumpImage?: Function;
    }

    const carouselObj: Carousel = new Carousel({
        animationEffect: 'Fade',
        cssClass: 'templateCarousel',
        items: [
            { template: '#itemTemplate1' },
            { template: '#itemTemplate2' },
            { template: '#itemTemplate3' },
            { template: '#itemTemplate4' },
            { template: '#itemTemplate5' },
        ],
        previousButtonTemplate: '<button id="previous" class ="e-control e-btn e-lib e-flat e-round nav-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m13.5 7.01 13 13m-13 13 13-13"></path></svg></button>',
        nextButtonTemplate: '<button id="next" class ="e-control e-btn e-lib e-flat e-round nav-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m13.5 7.01 13 13m-13 13 13-13"></path></svg></button>',
        indicatorsTemplate: '#indicatorTemplate'
    });
    carouselObj.appendTo('#carousel');
};