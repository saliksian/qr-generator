import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QRCode from "qrcode.react";

function App() {
  const [authentication, setAuthentication] = useState("nopass");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(false);
  const [qrText, setQrText] = useState("");

  const [url, setUrl] = useState("");

  const wifi = () => {
    if (!name || !password || authentication === "nopass") {
      alert("All inputs are required!");
      return;
    }

    setQrText(
      `WIFI:T:${authentication};S:${name};${
        authentication !== "nopass" ? `P:${password};` : ""
      }H:${hidden};`
    );

    setAuthentication("nopass");
    setName("");
    setPassword("");
  };
  const Text = () => {
    if (!url) {
      alert("All inputs are required!");
      return;
    }
    setQrText(url);

    setUrl("");
  };

  return (
    <>
      <div className="mt-4 container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 d-flex flex-column align-items-center">
            <div className="bg-light  text-dark mb-4 w-100 text-center">
            <h1 >QRCode Generator</h1>

            </div>

            <div>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                WiFi QRCode
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        WiFi QRCode
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="mt-2">Authentication Type</label>
                        <select
                          className="form-select w-100"
                          value={authentication}
                          onChange={(e) => setAuthentication(e.target.value)}
                        >
                          <option value="nopass">No Password</option>
                          <option value="WEP">WEP</option>
                          <option value="WPA">WPA</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="mt-2">Network Name (SSID)</label>
                        <input
                          type="text"
                          className="w-100 form-control mt-3"
                          placeholder="Enter Network Name (SSID)..."
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        ></input>
                      </div>
                      <div className="mb-3">
                        <label className="mt-2">Network Name (SSID)</label>
                        <input
                          type="password"
                          className="w-100 form-control mt-3"
                          placeholder="Enter Password..."
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={wifi}
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-4">
        {qrText.length > 0 && (
          <QRCode value={qrText} renderAs={"svg"} size={128} />
        )}
      </div> */}

            <div>
              <button
                type="button"
                className="btn btn-primary mt-4"
                data-bs-toggle="modal"
                data-bs-target="#URL"
              >
                URL QRCode
              </button>
              <div
                className="modal fade"
                id="URL"
                tabIndex={-1}
                aria-labelledby="URLLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="URLLabel">
                        URL QRCode
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="mt-2">ENter URL</label>
                        <input
                          type="text"
                          className="w-100 form-control mt-3"
                          placeholder="www.google.com..."
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={Text}
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              {qrText.length > 0 && (
                <QRCode value={qrText} renderAs={"svg"} size={128} />
              )}
            </div>
          </div>

          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}

export default App;
