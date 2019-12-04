import React from 'react'

const Work = () => {
    return (
        <div id="work">
            <div className="container">
                <h1>Employment History</h1>
                <br/>
                <div className="work-grid">
                    <div>
                        <h3>Senior Product Integrity Manager @ BounceX</h3>
                        <p>August 2018 &ndash; August 2019</p>
                        <ul>
                            <li>Led QA within an Agile team for BounceX's customer facing application developed and executed comprehensive test plans including API tests, functional tests, and end-to-end tests</li>
                            <li>Collaborated with Product Owners and Software Engineers to create user story acceptance criteria, leveraged product expertise to ensure new features were built to QA and company standards</li>
                            <li>Identified and troubleshot bugs, provided feedback to improve UI/UX, and communicated impact of defects to stakeholders</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Product Integrity Manager @ BounceX</h3>
                        <p>March 2018 &ndash; August 2018</p>
                        <ul>
                            <li>Established QA processes for new features, including workflow, testing best practices, data validation, and documentation</li>
                            <li>Worked cross-functionally to successfully validate new features, including product feed emails and web push notifications</li>
                            <li>Oversaw the creation and execution of test plans by team members, prioritized tasks for the team</li>
                            <li>Responsible for platform level bug replication, reporting, and verification of fixes</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Senior Integrity Analyst @ BounceX</h3>
                        <p>January 2017 &ndash; March 2018</p>
                        <ul>
                            <li>Validated the functionality, logic, and UI/UX of custom integrations and new features, including a new email product</li>
                            <li>Identified areas for improvement in testing processes and the email product itself, collaborated to implement updates</li>
                            <li>Trained and mentored team members working on the email product</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Product Integrity Analyst @ BounceX</h3>
                        <p>June 2015 &ndash; January 2017</p>
                        <ul>
                            <li>Performed manual, visual, and data testing of client integrations, including bug identification and reporting</li>
                            <li>Developed a formal testing process and in-depth documentation for the email product</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work