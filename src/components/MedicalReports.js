import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import {
  Download,
  FileEarmarkArrowUpFill,
  Pencil,
  Search,
  Upload,
} from "react-bootstrap-icons";
import "../styles/medicalReport.css";
import FileUploadWithDrag from "./FileUploadWithDrag";
const fileTypes = ["JPG", "PNG", "GIF"];

function MedicalReports() {
  const [file, setFile] = useState(null);

  const handleChangeFile = (file) => {
    console.log("File uploaded is ", file);
    setFile(file);
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
    console.log("Uploaded file:", event.target.files[0]);
  };

  return (
    <Container>
      {/* Search Bar and Filters */}
      <Row className="my-3">
        <Col md={6}>
          <form className="d-flex position-relative">
            <Search className="search-icon" />
            <input
              className="form-control me-2 search rounded-pill"
              type="search"
              placeholder="Search name or Contact number"
              aria-label="Search"
            />
          </form>
        </Col>
        <Col md={3}>
          <select className="d-down rounded-pill">
            <option>k</option>
          </select>
        </Col>
        <Col md={3}>
          <button
            className="btn btn-primary upload-report-btn rounded-pill"
            type="button"
            data-toggle="modal"
            data-target="#uploadReportBtn"
          >
            <Upload /> <span className="text-center">Upload</span>
          </button>
        </Col>
      </Row>

      {/* Cards */}
      <Row>
        {[...Array(9)].map((_, index) => (
          <Col md={4} xs={1} sm={2} key={index} className="mb-3">
            <Card style={{ minHeight: "200px" }}>
              <Card.Body>
                <Card.Title>
                  <Row className="p-2">
                    <Col xs={10}>
                      <h6 className="report-title">My title of report</h6>
                    </Col>
                    <Col xs={2} className="text-end date">
                      {" "}
                      <Pencil />{" "}
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Footer>
                  <Row className="d-flex justify-content-between align-items-center">
                    <Col xs={9}>
                      <span className="report-upload-date text-primary border-primary">
                        December 21, 2003
                      </span>
                      <p className="report-upload-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </Col>
                    <Col xs={3} className="text-end">
                      <Download
                        className="report-download"
                        color="rgba(227, 140, 59, 1)"
                        size={30}
                      />
                    </Col>
                  </Row>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/**  Upload Report Modal */}
      <div
        class="modal fade"
        id="uploadReportBtn"
        tabindex="-1"
        aria-labelledby="uploadReportBtnLabel"
        aria-hidden="true"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center" id="uploadReportBtnLabel">
                <Download /> Upload Files
              </h5>
            </div>
            <p className="px-3">You can upload your medical report here</p>
            <div class="modal-body">
              <div className="drag-container d-flex flex-column align-items-center justify-content-evenly">
                <FileEarmarkArrowUpFill color="white" size={20} />
                <FileUploadWithDrag
                  fileTypes={fileTypes}
                  handleChange={handleChangeFile}
                  sytle={{ visibility: "hidden" }}
                />
                <InputGroup>
                  <FormControl
                    type="file"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                    id="upload-button"
                  />
                  <Button
                    variant="outline-secondary"
                    className="w-100"
                    onClick={() =>
                      document.getElementById("upload-button").click()
                    }
                  >
                    Upload File
                  </Button>
                </InputGroup>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MedicalReports;
