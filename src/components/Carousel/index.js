import React, {Component} from "react";
import M from "materialize-css";
import "./style.css";
import Carousel1 from "../../pictures/grass.jpg";
import Carousel2 from "../../pictures/forest.jpg";
import Carousel3 from "../../pictures/sheep.jpg";
import Carousel4 from "../../pictures/guy.jpg";

export default class Carousel extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems);
            return instances;
        });
    }

    

    render(){
        return (
            <div className="carousel carousel-slider">
                <a className="carousel-item" href="#one!"><img src={Carousel1} alt="Image1" /></a>
                <a className="carousel-item" href="#two!"><img src={Carousel2} alt="Image2" /></a>
                <a className="carousel-item" href="#three!"><img src={Carousel3} alt="Image3" /></a>
                <a className="carousel-item" href="#four!"><img src={Carousel4} alt="Image4" /></a>
            </div>
        );
    }
}