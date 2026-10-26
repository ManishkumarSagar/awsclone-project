import '../css/home.css';
const Home= ()=>{
    return(
        <>
        <article id="hm-container">
            <div id="divs-sect">
                <div><strong>AWS Free Tier</strong></div>
                <div>Overview</div>
                <div>Free Tier Categories</div>
                <div>How to create an account</div>
                <div>Legacy free Tier</div>
                <div>FAQs</div>
                <div>More</div>
            </div>
            <div class="aws-tier">
                <small class="awsu">AWS</small>
                <small><i class='fas fa-caret-right'></i></small>
                <small>AWS Free Tier</small>
            </div>
            <div class="flexaws-container">
                <p>Did you create an AWS account before July 15th, 2025? Access the Legacy Free Tier</p>
                <i class='fas fa-arrow-circle-right'></i>
            </div>
            <div class="hm-upcontainer">
                <div><h1>AWS Free Tier</h1></div>
                <p>Gain free, hands-on experience with AWS products and services</p>
                <div>
                    <input type="button" value="Create a Free Account" class="hmbtn1"></input>
                </div>
            </div>
            <div class="hmpara">
                <h2>New customers get up to $200 in credits</h2>
                <p class="hminpara">New AWS customers can get started at no cost with the AWS Free Tier. Gain $100 USD credits<br></br> at sign-up and up to $100 USD more to earn as you explore key AWS services. Test drive AWS<br></br> services with the Free Plan for up to 6 months. You won't be charged unless you choose the<br></br> Paid Plan, which allows you to scale your operations and gain access to over 150 AWS services.</p>
            </div>
            <section class="hmplan-sect">
                <div>
                    <h2 class="hmloan-head">Free Plan</h2>
                    <p>Experience AWS for up to 6 months without cost or commitment</p>
                    <p>✓ Receive up to $200 USD in credits</p>
                    <p>✓ Includes free usage of select services</p>
                    <p>✓ No charges incurred unless you switch to the Paid Plan</p>
                    <p>✘ Workloads scale beyond credit thresholds</p>
                    <p>✘ Access to all AWS services and features</p>
                </div>
                <div>
                    <h2 class="hmloan-head">Paid Plan</h2>
                    <p>Develop production-ready workloads with access to over 150 AWS services</p>
                    <p>✓ Receive up to $200 USD in credits</p>
                    <p>✓ Includes free usage of select services</p>
                    <p>✓ Pay beyond credit thresholds</p>
                    <p>✓ Workloads scale beyond credit thresholds</p>
                    <p>✓ Access to all AWS services and features</p>
                </div>
            </section>
            <section class="hm-explore">
                <h2>Explore our Offers</h2>
                <div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search'></input>
                </div>
            </section>
            <section id="aws-container1">
                <div class="disp">Displaying 1-8</div>
                <div class="gridec-container">
                    <div class="card1-ec2">
                        <small>Compute</small>
                        <span class="ec2span">
                            <i class='fas fa-location-arrow'></i>
                            <span>Available on both plan</span>
                        </span>
                        <h3>Amazon EC2</h3>
                        <p class="ecpara">Resizable compute capacity in the cloud.</p>
                        <div class="icons-ec">
                            <i class='fas fa-long-arrow-alt-right'></i>
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                    <div class="card1-ec2">
                        <small>Storage</small>
                        <span class="ec2span">
                            <i class='fas fa-location-arrow'></i>
                            <span>Available on both plan</span>
                        </span>
                        <h3>Amazon S3</h3>
                        <p class="ecpara">Secure, durable and scalable object storage infrastructure.</p>
                        <div class="icons-ec">
                            <i class='fas fa-long-arrow-alt-right'></i>
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                    <div class="card1-ec2">
                        <small>Storage</small>
                        <span class="ec2span">
                            <i class='fas fa-location-arrow'></i>
                            <span>Available on both plan</span>
                        </span>
                        <h3>Amazon RDS</h3>
                        <p class="ecpara">Managed relational database service for MySQl, PostgreSQL, MariaDB, or SQL Server</p>
                        <div class="icons-ec">
                            <i class='fas fa-long-arrow-alt-right'></i>
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                    <div class="card1-ec2">
                        <small>Storage</small>
                        <span class="ec2span">
                            <i class='fas fa-location-arrow'></i>
                            <span>Available on both plan</span>
                        </span>
                        <h3>Amazon DynamoDB</h3>
                        <p class="ecpara">Serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale.</p>
                        <div class="icons-ec">
                            <i class='fas fa-long-arrow-alt-right'></i>
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                    <div class="card1-ec2">
                        <small>Storage</small>
                        <span class="ec2span">
                            <i class='fas fa-location-arrow'></i>
                            <span>Available on both plan</span>
                        </span>
                        <h3>Amazon Bedrock AgentCore</h3>
                        <p class="ecpara">Build, deploy and operate highly effective agents securely, at scale using any framework and model - no infrastructure management.</p>
                        <div class="icons-ec">
                            <i class='fas fa-long-arrow-alt-right'></i>
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                    <div class="card1-ec2">
                        <small>Storage</small>
                        <span class="ec2span">
                            <i class='fas fa-location-arrow'></i>
                            <span><p>Available on both plan</p></span>
                        </span>
                        <h3>Amazon SageMaker AI</h3>
                        <p class="ecpara">Machine learning for every data scientist and developer.</p>
                        <div class="icons-ec">
                            <i class='fas fa-long-arrow-alt-right'></i>
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                    <div class="card1-ec2">
                        <small>Storage</small>
                        <span class="ec2span">
                            <i class='fas fa-location-arrow'></i>
                            <span>Available on both plan</span>
                        </span>
                        <h3>Amazon Bedrock</h3>
                        <p class="ecpara">The Easiest way to build and scale generative AI appications with foundation models.</p>
                        <div class="icons-ec">
                            <i class='fas fa-long-arrow-alt-right'></i>
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                    <div class="card1-ec2">
                        <small>Storage</small>
                        <span class="ec2span">
                            <i class='fas fa-location-arrow'></i>
                            <span><p>Available on both plan</p></span>
                        </span>
                        <h3>Amazon Lambda</h3>
                        <p class="ecpara">Run code without thinking about servers or clusters.</p>
                        <div class="icons-ec">
                            <i class='fas fa-long-arrow-alt-right'></i>
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                    <div class="card1-ec2">
                        <small>Storage</small>
                        <span class="ec2span">
                            <i class='fas fa-location-arrow'></i>
                            <span>Available on both plan</span>
                        </span>
                        <h3>Amazon Aurora DSQL</h3>
                        <p class="ecpara">Fastest serverless distributed SQL database for always available applications.</p>
                        <div class="icons-ec">
                            <i class='fas fa-long-arrow-alt-right'></i>
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section class="aws-container2">
                <div class="awscont2-parent">
                    <div class="aws-child1">
                        <h1>Learn more about our offers</h1>
                    </div>
                    <div class="aws-child2">
                        <div class="innerchild1">
                            <input type='checkbox' id="free-plan"/>
                            <label for="free-plan" class="freep">Free plan</label>
                            <p class="fphide">Start your AWS journey with up to $200 in Free Tier credits. Gain access to 30+ always free service. Explore and experiment with AWS services at no cost for up to 6 months.</p>
                        </div>
                        <div class="innerchild2">
                            <input type="checkbox" id="paid-plan"></input>
                            <label for="paid-plan" class="paidp">Paid Plan</label>
                            <p class="pphide">Access our complete portfolio of 150+ AWS services with pay-as-you-go pricing, plus take advantage of 30+ Always Free services. Build and scale your solutions with confidence.</p>
                        </div>
                        <div class="innerchild3">
                            <input type="checkbox" id="short-term"></input>
                            <label for="short-term" class="shortt">Short-term trial</label>
                            <p class="sthide">Experience select AWS services through limited free trials. Begin your trial when you start using the service, and utilize any eligible credits for usage beyond trial limits.</p>
                        </div>
                        <div class="innerchild4">
                            <input type="checkbox" id="always-free"></input>
                            <label for="always-free" class="alwaysf">Always Free</label>
                            <p class="afhide">Leverage perpetually free service offerings with specified monthly limits. When customers exceed these free usage limits or access features not included in the free tier, credits are automatically applied to cover the additional costs.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="aws-container3">
                <div class="aws-get">
                    <h2>Get Started</h2>
                </div>
                <div class="innerchild-cont3">
                    <div class="child1-cont3">
                        <small>Getting started</small>
                        <h1>Sign up for an AWS account</h1>
                        <p>Gain instant access to the AWS Free Tier.</p>
                        <i class='fas fa-long-arrow-alt-right'></i>
                    </div>
                    <div class="child1-cont3">
                        <small>Console</small>
                        <h1>Start building in the console</h1>
                        <p>Build your production solution quickly and easily once you're ready.</p>
                        <i class='fas fa-long-arrow-alt-right'></i>
                    </div>
                    <div class="child1-cont3">
                        <small>FAQs</small>
                        <h1>Have more questions?</h1>
                        <p>Learn more with our Frequently Asked Questions.</p>
                        <i class='fas fa-long-arrow-alt-right'></i>
                    </div>
                </div>
            </section>
            <section class="aws-container4">
                <div class="inner-cont4">
                    <h3>Did you find what you were looking for today?</h3>
                    <p>Let us know so we can improve the quality of the content on our pages.</p>
                </div>
                <div class="inner1-cont4">
                    <div class="child1-cont4">
                        <h4>Yes</h4>
                        <i class="fa fa-thumbs-up"></i>
                    </div>
                    <div class="child2-cont4">
                        <h4>No</h4>
                        <i class="fa fa-thumbs-down"></i>
                    </div>
                </div>
            </section>
        </article>
        </>
    )
}
export default Home;