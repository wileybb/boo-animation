import React from 'react'
import booImage from './boo.jpg'
import shadow from './shadow.jpg'

class Boo extends React.Component {
    constructor() {
        super()
        this.state = {
            clicked: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.reappear = this.reappear.bind(this)
        this.handleMouseOver = this.handleMouseOver.bind(this)
    }

    handleClick(){
        
     
            // setTimeout(() => this.setState({clicked: true}), 3000); 
        this.setState({clicked: true})
        this.reappear()

        
    }
    handleMouseOver() {
        this.setState({
            clicked: true
        })
    }
    handleMouseOut() {
        this.setState({
            clicked: false
        })
    }
    reappear(){
        setTimeout(() => this.setState(prevState=>{
            return{
                clicked: !prevState.clicked
            }
        }), 3000);
    }

    render() {
        // if(this.state.clicked) {
            return(
                <container>
                    <h5></h5>
                    <div className='boo'>
                        <img 
                            className={this.state.clicked?'fadeOut':'fadeIn'} 
                            onClick={this.handleClick} 
                            onMouseOver={this.handleMouseOver}
                            onMouseOut={this.handleMouseOut}
                            />
                    </div>
                    <br/>
                    <div className='shadow'>
                        <img className={this.state.clicked?'shadowFadeOut':'shadowFadeIn'} src={shadow}/>
                    </div>
                </container>
            )
        // } else {
            // return(
            //     <div className="boo" onClick={this.handleClick}>
            //         <h5>click me</h5>
            //         <img src={booImage} />
            //     </div>
            // )
        // }

    }
}

export default Boo
