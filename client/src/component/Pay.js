import React, { Component } from "react";

import { Button } from "@material-ui/core";
export default class FilesUploadComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <h3>Upload Your Payment Transaction here</h3>
            <div className="form-group">
              <input type="file" />
            </div>
            <div className="form-group">
              <Button
                type="submit"
                name="order"
                variant="outlined"
                size="large"
                color="primary"
                onClick={this.handleSubmit}
                style={{
                  marginTop: "30px",
                  marginBottom: "20px",
                  marginRight: "30px",
                  backgroundColor: "#d50000",
                  color: "#fff",
                  border: "none"
                }}
              >
                Upload
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
