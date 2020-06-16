import React, {Component} from 'react'
import './SortingVisualiser.css'
import * as sortingAlgorithms from './sortingAlgorithms/sortingAlgorithms.js'



export default class SortingVisualiser extends Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }
    
    resetArray(){
        const array = [];
        for (let i = 0; i<100; i++){ //210 or 310
            array.push(randomIntFromInterval(5,500));
        }
        this.setState({array});
    }

    mergeSort(){

    }

    quickSort(){

    }

    heapSort(){

    }

    bubbleSort(){
        var steps = sortingAlgorithms.bubbleSort(this.state.array);
        console.log(steps);
        for(let i = 0; i < steps.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            setTimeout(() =>{
                const [barOneIndex, barTwoIndex] = steps[i];
                //console.log(barOneIndex, barTwoIndex);
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                var tmp = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tmp;
            }, i * 10);
        }
    }

    render() {
        const {array} = this.state;
        return (
            <div className ="array-container">
                {array.map((value, idx) => (
                    <div 
                        className="array-bar"
                        key={idx} 
                        style = {{height: `${value}px`}}>
                    </div>
                ))}
                <br></br>
                <button onClick={() => this.componentDidMount()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
