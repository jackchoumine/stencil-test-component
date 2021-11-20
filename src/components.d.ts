/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyRating {
        "getValue": (params: any) => Promise<number>;
        "maxValue": number;
        "value": number;
    }
}
declare global {
    interface HTMLMyRatingElement extends Components.MyRating, HTMLStencilElement {
    }
    var HTMLMyRatingElement: {
        prototype: HTMLMyRatingElement;
        new (): HTMLMyRatingElement;
    };
    interface HTMLElementTagNameMap {
        "my-rating": HTMLMyRatingElement;
    }
}
declare namespace LocalJSX {
    interface MyRating {
        "maxValue"?: number;
        "onRatingChange"?: (event: CustomEvent<any>) => void;
        "value"?: number;
    }
    interface IntrinsicElements {
        "my-rating": MyRating;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-rating": LocalJSX.MyRating & JSXBase.HTMLAttributes<HTMLMyRatingElement>;
        }
    }
}
