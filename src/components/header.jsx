import '../css/header.css';
const Header= ()=>{
    return(
        <>
        <section id="awshead">
            <div class="awslogo">
                <i class="fa-brands fa-aws"></i>
            </div>
            <div class="aws-list-container">
                <div><h5>Discover AWS</h5></div>
                <div><h5>Products</h5></div>
                <div><h5>Solutions</h5></div>
                <div><h5>Pricing</h5></div>
                <div><h5>Resources</h5></div>
            </div>
            <div>
                <i class="fa fa-search" aria-hidden="true"></i>
                <label for="search">
                    <input type="text" placeholder="Search" name="search" class="awsinpt1"></input>
                </label>
            </div>
            <div>
                <label for="myaccount">
                    <input type="button" value="Create account" name="myaccount" class="awsinpt2"></input>
                </label>
            </div>
        </section>
        </>
    )
}
export default Header;