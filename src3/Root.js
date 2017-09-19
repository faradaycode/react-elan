import React from 'react';
import {Link} from "react-router";

import $ from "jquery";
import {Header} from "./Header";

export class Root extends React.Component{
    constructor(props) {
    super(props)
    this.showmenu = this.showmenu.bind(this)
  }
  
  showmenu() {
    $(this.refs['menus']).slideToggle()
  }
    
    render(){
        return(
            <div>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4"><img src="image/logo.png" className="img-responsive" /> 
                        <span className="icon-me" onClick={this.showmenu}></span>
                        </div>
                            <div className="col-sm-8 menus"  ref="menus">
                                <Header />
                            </div>
                        </div>
                    </div>            
                </div>
            <div className="f-body">
                {this.props.children}
            </div>
            <div className="f-footer">            
                   <div className="container">
                   <div className="row">
                    <div className="col-sm-6">
                        <div className="f-abou">
                            <div className="had"><img src="image/logo.png" className="img-responsive" />
                            </div>
                            <div>magnama liquamq uaeratvolup tatem. Utenim
                                admin imaveniam, quisn strume xercitat ionem
                                ullam corporis
                            </div>
                        </div>
                    </div>
                        <div className="col-sm-6">
                            <div className="linkd">
                            <ul className="menu">
                                <li><Link to={"/TestFrontEnd/Home"} >Home</Link></li>
                                <li><Link to={"/TestFrontEnd/Gallery"} >Gallery</Link></li>
                                <li><Link to={"/TestFrontEnd/Contact"} >Contact</Link></li>
                                <li><Link to={"/TestFrontEnd/About"} >About</Link></li>
                            </ul>
                            </div>
                            <div className="linkd">
                            <ul className="menu">
                                <li><a href="#"><img src="image/icon-facebook.png" /></a></li>
                                <li><a href="#"><img src="image/icon-instagram.png" /></a></li>
                                <li><a href="#"><img src="image/icon-twitter.png" /></a></li>
                                <li><a href="#"><img src="image/icon-youtube.png" /></a></li>
                            </ul>
                            </div>
                            <div className="linkd">magnamaliquamquaeratvoluptatem.Utenim
                            </div>
                        </div>
                   </div>
                   </div>
               </div>
            </div>
        )
    }
}
