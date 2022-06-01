import React, { Component } from 'react'

export default class Components extends Component {
    render() {
        return (
            <div >

                {/* Header Tag  */}
                <h1 style={{ textAlign: "center", margin: "50px " }}> <strong>Bio Data  191500508 Nikunj Khandelwal</strong></h1>

                {/* Block -1  */}
                <p style={{ marginLeft: "40px " }}><strong>Personal Skills</strong> </p>
                <ul>Leadership skills </ul>
                <ul>Communication skills</ul>
                <ul>Well Versed in English  </ul>
                {/* Block -2 */}

                <p style={{ marginTop: "-154px ", marginLeft: "400px" }}><strong>Professional Skills</strong> </p>
                <ul style={{ marginLeft: "362px" }}>Knowledge of Front end - technologies </ul>
                <ul style={{ marginLeft: "362px" }}>Knowledge of Back end - technologies</ul>
                <ul style={{ marginLeft: "362px" }}>Knowledge of Android Development </ul>

                    {/* Block - 3 */}

                <p style={{ marginTop: "-154px ", marginLeft: "1000px" }}><strong>Hobbies </strong> </p>
                <ul style={{ marginLeft: "961px" }}>Interested in Playing Cricket </ul>
                <ul style={{ marginLeft: "961px" }}>Interest in listening Music </ul>
                <ul style={{ marginLeft: "961px" }}>Interested in Reading English NewsPapers</ul>
            </div>




        )
    }
}
