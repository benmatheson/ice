var url = "https://cdn.rawgit.com/benmatheson/ice/4a1ecfcd/iceDeten.json";

class StatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const selectedState = e.target.value;
    console.log(selectedState);
    this.props.onChange1(selectedState);
  }

  render() {
    return (
     
             <select className="selector1" onChange={this.handleChange}>
               


<option value='ALABAMA'> Alabama ⬍  </option> <option value='ALASKA'> Alaska </option> <option value='ARIZONA'> Arizona </option> <option value='ARKANSAS'> Arkansas </option> <option value='CALIFORNIA'> California </option> <option value='COLORADO'> Colorado </option> <option value='CONNECTICUT'> Connecticut </option> <option value='DELAWARE'> Delaware </option> <option value='FLORIDA'> Florida </option> <option value='GEORGIA'> Georgia </option> <option value='HAWAII'> Hawaii </option> <option value='IDAHO'> Idaho </option> <option value='ILLINOIS'> Illinois </option> <option value='INDIANA'> Indiana </option> <option value='IOWA'> Iowa </option> <option value='KANSAS'> Kansas </option> <option value='KENTUCKY'> Kentucky </option> <option value='LOUISIANA'> Louisiana </option> <option value='MAINE'> Maine </option> <option value='MARYLAND'> Maryland </option> <option value='MASSACHUSETTS'> Massachusetts </option> <option value='MICHIGAN'> Michigan </option> <option value='MINNESOTA'> Minnesota </option> <option value='MISSISSIPPI'> Mississippi </option> <option value='MISSOURI'> Missouri </option> <option value='MONTANA'> Montana </option> <option value='NEBRASKA'> Nebraska </option> <option value='NEVADA'> Nevada </option> <option value='NEW HAMPSHIRE'> New Hampshire </option> <option value='NEW JERSEY'> New Jersey </option> <option value='NEW MEXICO'> New Mexico </option> <option value='NEW YORK'> New York </option> <option value='NORTH CAROLINA'> North Carolina </option> <option value='NORTH DAKOTA'> North Dakota </option> <option value='OHIO'> Ohio </option> <option value='OKLAHOMA'> Oklahoma </option> <option value='OREGON'> Oregon </option> <option value='PENNSYLVANIA'> Pennsylvania </option> <option value='RHODEISLAND'> RhodeIsland </option> <option value='SOUTH CAROLINA'> South Carolina </option> <option value='SOUTH DAKOTA'> South Dakota </option> <option value='TENNESSEE'> Tennessee </option> <option value='TEXAS'> Texas </option> <option value='UTAH'> Utah </option> <option value='VERMONT'> Vermont </option> <option value='VIRGINIA'> Virginia </option> <option value='WASHINGTON'> Washington </option> <option value='WEST VIRGINIA'> West Virginia </option> <option value='WISCONSIN'> Wisconsin </option> <option value='WYOMING'> Wyoming </option>






             </select>)
  
    
  }
}

class IceApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ice: [], ice_data: [] };
    this.updateState = this.updateState.bind(this);
  }

  updateState(st) {
    const selected = this.state.all_ice.filter(
      d => d.recipient_state_name == st
    );
    console.log("selected");

    console.log(selected);
    this.setState({ ice: selected });
  }

  componentWillMount() {
    fetch(url)
      .then(d => d.json())
      .then(
        data => {
          console.log(data);
          this.setState({ ice: data, all_ice: data });
        } //callbakc 1
      );
  } //compwillmount

  render() {
    return (
      <div>
        {" "}
        <div className="sub">
          <StatePicker onChange1={this.updateState} />
        </div>
        <div className="flexContainer">
          {this.state.ice.map(d => (
            <div className="flexItem">
              <span className="title"> {d.recipient_name.toLowerCase()} </span>{" "}
              <br /><br /> Vendor City:
              <span className="thin" className="city">
                {d.recipient_city_name.toLowerCase()},
              </span>
              <span className="thin">
                {d.recipient_state_name.toLowerCase()}
              </span>
              <br />
              Contract Cost{" "}
              <span className="thin cost">
                ${parseInt(d.base_and_exercised_options_value).toLocaleString()}
              </span>{" "}
              <br />
              Performance City:
              <span className="city">
                {d.primary_place_of_performance_city_name}
                <br />
              </span>
              Product Category:
              <span className="thin prod">
                {d.product_or_service_code_description.toLowerCase()}
              </span>
              <br />
              Contract Description:
              <span className="desc thin">{d.award_description.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  //  render method
}
//componenet

ReactDOM.render(<IceApp />, document.querySelector("#app"));
