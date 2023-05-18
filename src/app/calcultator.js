'use client'

import React from "react";

export default class Calculator extends React.Component {

    state = {
        proteins: 0,
        glucides: 0,
        lipides: 0,
        fibres: 0,
        poid: 0,
        points: 0
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.calculate()
    }

    calculate() {

        const { proteins, glucides, lipides, fibres, poid } = this.state;

        this.state.points = Math.round((proteins / 11 + glucides / 9 + lipides / 4 + fibres / 30) * poid) / 100;
    }

    render() {

        const { proteins, glucides, lipides, fibres, poid, points } = this.state;

        return (
            <div>
                <form role="form">
                    <div class="field">
                        <label class="label">Protéines</label>
                        <div class="control">
                            <input name="proteins" class="input" type="number" value={proteins} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Glucides</label>
                        <div class="control">
                            <input name="glucides" class="input" type="number" value={glucides} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Lipides</label>
                        <div class="control">
                            <input name="lipides" class="input" type="number" value={lipides} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Fibres</label>
                        <div class="control">
                            <input name="fibres" class="input" type="number" value={fibres} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Poids en grammes</label>
                        <div class="control">
                            <input name="poid" class="input" type="number" value={poid} onChange={this.handleChange} />
                        </div>
                    </div>
                    <h2>Points pour {poid} g : {points}</h2>
                </form>
            </div>
        )
    };
}
