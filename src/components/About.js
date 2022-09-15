import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }
    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1 className="my-3">Features of this Website</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Languages Used</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This Website is made using HTML,CSS,Bootstrap,Javascript and React.js
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Functions of Buttons</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The buttons don't work if there is not text. <br />
                                Functions of buttons: <br />
                                <strong>Convert to Uppercase:</strong> All the letters in text area will be converted to uppercase. <br />
                                <strong>Convert to Lowercase:</strong> All the letters in text area will be converted to lowercase. <br />
                                <strong>Clear text:</strong> Text area will be cleared. <br />
                                <strong>Remove Extra Spaces:</strong> All the extra spaces will be removed.<br />


                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Other Features</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Text summary:</strong> It will tell how many words and characters are in text area and how much time will take on average to read it. <br />
                                <strong>Dark mode:</strong> This website also has a dark mode. A alert will be displayed when you switch between dark mode and light mode.
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}