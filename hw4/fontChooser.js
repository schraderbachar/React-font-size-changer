/**
 * INTIAL
 * when initally renderd, checkbox buttons and fontSizeSpan element shoiuld be hidden as in the version we distributed
 * text prop text when created should be displayed. 
 * if bold property is true text in bold. else normal. 
 * text that is displayed should have a fints size equal to the size prop of the fontChooser comp. 
 * DISPLAYING
 * when checkbox buttons and fSS are hidden and the user clicks on the text that the comp is displaying in the HTML page, all els should appear to the left
 * when they are shown and the user clicks on the text that they are displaying- els should dissapear- become hidden again
 * CHECKBOX FUNCTIONALITY
 * if the react comps bold is true when init created- cbox should be checked when first displayed. else unselected
 * if cbox is unselected/unchecked and the user checks it text change to bold
 * when checked again it should change to reg
 * CHANGING FONT SIZE
 * when els are inited value in fSS should equal "size" prop as in the version we distributed
 * when decreaseBtn is clickd val in fSS should dec and the font size should follow suit. the value in the fSS may not be smaller than the react comps min prop
 * if the fSS val === min prop and the user clciks dcr btn no change- add alert saying cant go lower
 * same for the inc buttong
 * when fSS is double clicked, its value should default to original size along with the font szie of the text
 * ERROR 
 * if min prop <= 0 its val should be treated as 1 for limiting the smallest font size
 * if min is > max,min and max should both be treated as the larger of the two,i.e the min prop
 * if the sizse prop is less than the min- init val should be treated as the same as the min- if min is <= 0 then 1
 * if szie is > max init val of max should be treated as the the same as the max prop
 */
class FontChooser extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isBold: false, size: 16, min: 4, max: 40, text: 'Fun with React!', };

    }
    makeBold() {
        //makes the id bold
        this.setState({ isBold: !this.state.isBold });
    }
    increment() {
        this.state.size < this.state.max ? this.setState({ size: this.state.size + 1 }) : alert('You cannot go any higher');
    }
    decrement() {
        this.state.size > this.state.min ? this.setState({ size: this.state.size - 1 }) : alert('You cannot go any lower');
    }
    doubleClick() {
        this.setState({ size: 16 });
    }


    render() {
        var weight = this.state.isBold ? 'bold' : 'normal'
        var myColor = this.state.isBold ? 'red' : 'black';


        return (
            <div>
                <input type="checkbox" id="boldCheckbox" onClick={this.makeBold.bind(this)} />
                <button id="decreaseButton" onClick={this.decrement.bind(this)}>-</button>
                <span id="fontSizeSpan" onDoubleClick={this.doubleClick.bind(this)}>{this.state.size}</span>
                <button id="increaseButton" onClick={this.increment.bind(this)}>+</button>
                <span id="textSpan" style={{ fontWeight: weight, fontSize: (this.state.size), color: myColor }} >{this.props.text}</span>
            </div>
        );
    }
}
