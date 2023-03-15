
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Styles = {
  input: {
    // height: 40,
    width: "100%",
    borderRadius: 4,
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    // outline: "none",
    border: "1px solid #A8BDB1 "
  },
  inputUpdate: {
    // height: 40,
    width: "50%",
    borderRadius: 4,
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    // outline: "none",
    border: "1px solid #A8BDB1 "
  },
 
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "6px 10px",
    borderRadius: 6,
    marginLeft: 8,
    outline: "none"
  },
  buttonEdit: {
    backgroundColor: "black",
    color: "white",
    padding: "6px 10px",
    borderRadius: 6,
    marginLeft: 8,
    outline: "none",
    float:"right"
  },
  buttonMain: {
    width: "100%",
    // height: 30,
    backgroundColor: "#045024 ",
    color: "white",
    padding: "16px",
    // lineHeight:30,
    borderRadius: 4,
    border: "1px solid #A8BDB1 ",
    marginLeft: 16,
    marginTop: 10,
    // outline: "none",
    textAlign: "center",
    fontSize: 18
  },
  disp: {}
};

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        id: ""
      },
      value: [],
      isEdit: false,
      editValue: "",
      editId: "",
      styles1: "none"
    };
  }

  //function for input box
  handleChange = e => {
    this.setState(
      {
        name: {
          value: e.target.value,
          id: uuidv4()
        }
      },
      () => console.log(this.state.name.value)
    );
  };

  //submit function on value submit
  submit = () => {
    console.log("button");
    if (this.state.name.value === "") {
      alert("please add todo");
      return;
    }
    this.setState(
      {
        name: {
          value: ""
        },
        value: [...this.state.value, this.state.name]
      },
      () => console.log(this.state)
    );
  };

  //remove function to remove items from todo
  remove = id => {
    let value = this.state.value;
    const remove = value.filter(ele => ele.id !== id);
    this.setState({
      value: remove
    });
  };

  //edit function to edit todo item
  edit = (value, id) => {
    this.setState(
      {
        isEdit: true,
        editValue: value,
        editId: id
      },
      () => console.log(id, value)
    );
  };

  //update function after edit to update item
  update = () => {
    let value = this.state.value;
    const item = value.filter(ele =>
      ele.id === this.state.editId
        ? (ele.value = this.state.editValue)
        : ele.value
    );

    this.setState({ value: item, isEdit: false }, () => {
      console.log(this.state.value);
    });
  };

  render() {
    const { isEdit } = this.state;

    if (!isEdit) {
      return (
       
        <>
          <div style={{display:"flex",justifyContent:"center",alignContent:"center",margin:"20px 0px"}}>
            <div
              style={{
                width: "50%",
                textAlign: "center"
                // display: "flex",
                // flexDirection: "column"
                
              }}
            >
              <h1>ToDo List</h1>
              <label>
                <input
                  style={Styles.input}
                  value={this.state.name.value}
                  onChange={this.handleChange}
                  placeholder="add your task.."
                />
              </label>

              <button onClick={this.submit} style={Styles.buttonMain}>
                Add todo
              </button>
            </div>
          </div>

          <div style={{ margin: 10, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" }}>
            {this.state.value &&
              this.state.value.map((ele, index) => (
                <div key={ele.id} style={{display:"flex", 
                justifyContent:"center",alignItems:"center",
                 margin:10, width:300, backgroundColor:"#E2E5F9",
                 textAlign:"left", padding:10, borderRadius:4,overflow:"auto"}}>
                   <span
                    style={{ textDecoration: `${this.state.styles1}`, fontSize:20, }}
                    onClick={() => {
                      this.setState({ styles1: "underline" });
                    }}
                  >
                    {ele.value}
                  </span>
                  <button
                    style={Styles.buttonEdit}
                    onClick={e => this.edit(ele.value, ele.id)}
                  >
                    edit
                  </button>
                  <button
                    style={Styles.buttonEdit}
                    onClick={() => this.remove(ele.id)}
                  >
                    remove
                  </button>
                </div>
              ))}
          </div>
        </>
      );
    } else {
      return (
        <div>
          <div style={{ fontSize: 18, margin: 6 }}>Edit todo</div>
          <input
            style={Styles.inputUpdate}
            value={this.state.editValue}
            onChange={e => {
              this.setState({ editValue: e.target.value });
            }}
          />
          <button style={Styles.button} onClick={this.update}>
            update
          </button>

          <button
            style={Styles.button}
            onClick={() => {
              this.setState({ isEdit: false });
            }}
          >
            cancel
          </button>
        </div>
      );
    }
  }
}
