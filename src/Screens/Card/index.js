import React, { Component } from 'react';

import "./css.css";

export default class Card extends Component {
    render() {
        return(
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title"><b>machine</b>&nbsp;|&nbsp;<i>noun</i></p>
                    <button className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div class="columns">
                        <div className="column">

                            <div className="context-block">
                                Entry
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Text input" 
                                    value = "tree"
                                />
                            </div>
                            <div className="context-block">
                                Part of Speech<br />
                                <div className="select">
                                    <select>
                                        <option>Noun</option>
                                        <option>With options</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="column">

                            <a style={{float: 'right'}}>
                                <img 
                                    src="https://bulma.io/images/placeholders/256x256.png"
                                    width="200" height="200" 
                                />
                            </a>

                        </div>
                    </div>

                    <div className="context-block">
                        Sentence
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Text input" 
                            value = "machine"
                        />
                    </div>
                    <div className="context-block">
                        Question
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Text input" 
                            value = "machine"
                        />
                    </div>
                    <div className="context-block">
                        Answer
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Text input" 
                            value = "machine"
                        />
                    </div>

                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Save changes</button>
                    <button className="button">Cancel</button>
                </footer>
                </div>
            </div>
        )
    }
}
