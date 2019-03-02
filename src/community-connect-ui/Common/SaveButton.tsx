import React, { Component } from 'react';

type Props = {
    saveItem: () => void;
    saveExist: boolean;
};

type State = {
    animateButtonInside: any;
    animateButtonOutside: any;
}
export class SaveButton extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            animateButtonInside: '',
            animateButtonOutside: [''],
        };
        this.buttonSign = this.buttonSign.bind(this);

        // this.cardRef = React.createRef();
    }

    handleClick = () => {
        this.props.saveItem();
        // let classes = [
        //     // styles['cbutton--effect-radomir__after'],
        //     // styles['cbutton--effect-radomir__cbutton--click__after'],
        //     // styles['cbutton__after'],
        // ];

        // this.setState({
        //     // animateButtonInside: styles['animate-button-click'],
        //     animateButtonOutside: classes,
        // });
        setTimeout(() => {
            this.setState({
                animateButtonInside: '',
                animateButtonOutside: [''],
            });
        },
            500
        );
    }

    buttonSign() {
        if (this.props.saveExist)
            return String.fromCharCode(0x2713)
        else
            return '+'
    }

    render() {
        return (
            <span onClick={this.handleClick}>
                <button>
                    <span
                        title='Add item to Saved Resources'
                        aria-label='Add item to Saved Resources'
                        >
                        { this.buttonSign() }
                    </span>
                </button>
            </span>
        );
    }
}