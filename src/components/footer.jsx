import '../css/footer.css';
const Footer= ()=>{
    return(
        <>
        <article id="parentft">
            <div id="ftbtndiv">
                <div>
                    <input type="button" value="Create an AWS account" name="awsaccount" class="ftbtn1"></input>
                </div>
                <div>
                    <input type="button" value="English" name="english" class="ftbtn2"></input>
                </div>
            </div>
            <div id="ftsect">
                <section id="ft-cont1">
                    <h3 class="fthead">Learn</h3>
                    <ul class="ftul">
                        <li>AWS Cloud Security</li>
                        <li>Whats's New</li>
                        <li>Blogs</li>
                        <li>Press Releases</li>
                    </ul>
                </section>
                <section id="ft-cont1">
                    <h3 class="fthead">Resources</h3>
                    <ul class="ftul">
                        <li>Getting Started</li>
                        <li>Training</li>
                        <li>AWS Trust Center</li>
                        <li>AWS Partners</li>
                    </ul>
                </section>
                <sections id="ft-cont1">
                    <h3 class="fthead">Developers</h3>
                    <ul class="ftul">
                        <li>.NET on AWS</li>
                        <li>Python on AWS</li>
                        <li>Java on AWS</li>
                        <li>Javascript on AWS</li>
                    </ul>
                </sections>
                <sections id="ft-cont1">
                    <h3 class="fthead">Help</h3>
                    <ul class="ftul">
                        <li>Contact Us</li>
                        <li>AWS re:Post</li>
                        <li>AWS Accessibility</li>
                        <li>Legal</li>
                    </ul>
                </sections>
            </div>
            <div><hr></hr></div>
            <div class="copyrgt">© 2025, Amazon Web Services, Inc. or its affiliates. All rights reserved.</div>
        </article>
        </>
    )
}
export default Footer;