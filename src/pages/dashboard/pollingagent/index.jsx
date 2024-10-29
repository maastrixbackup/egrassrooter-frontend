import { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { useRouter } from "next/router";
import { axiosGet, PostData } from "../../../../utils/ApiCalls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RadioInputToggle() {
  const router = useRouter();
  const [pollingAgent, setPollingAgent] = useState({
    email: "",
    polling_agents: "",
    polling_units: "",
    polling_agent_type: "",
  });
  const [selectedOption, setSelectedOption] = useState("email");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tokenData, setTokenData] = useState(null);
  const [userId, setUserId] = useState(null);

  const search = (event) => {
    const suggestions = [...Array(10).keys()].map((item) => event.query + "-" + item);
    setItems(suggestions);
    setItems2(suggestions);
    setItems3(suggestions);
  };

  useEffect(() => {
    setLoading(false);
    setTokenData(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userId"));
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (tokenData && userId) {
      try {
        const data = {
          email: pollingAgent.email,
          polling_agents: pollingAgent.polling_agents,
          polling_units: pollingAgent.polling_units,
          polling_agent_type: pollingAgent.polling_agent_type,
        };

        const res = await PostData(`polling-agent`, data, "", `Bearer ${tokenData}`);
        if (res.data) {
          toast.success(res.message);
          router.push("/dashboard/blog");
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        toast.error("An error occurred while adding the polling agent.");
      }
    } else {
      toast.error("No token found.");
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="user_dashboard.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Polling Agents
            </li>
          </ol>
        </nav>
      </div>
      <div className="cam-agent-sec">
        <div className="table-bx-main">
          <div className="table-title">
            <h4>Add Polling Agents</h4>
            <a href="#" className="btn-back">
              <i className="fal fa-angle-double-left" />
            </a>
          </div>
          <div className="event-form">
            <div className="row">
              <div className="col-lg-6">
                <div className="survet-img">
                  <img src="/images/elec-img.jpg" alt="Election" />
                </div>
              </div>
              <div className="col-lg-6">
                <form onSubmit={handleAdd}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="form-radio-bx">
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="d-flex gap-2">
                                <input type="radio" name="option" value="email" checked={selectedOption === "email"} onChange={handleOptionChange} />
                                <label>Email (Select Member of polling agents)</label>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="d-flex gap-2">
                                <input type="radio" name="option" value="vin" checked={selectedOption === "vin"} onChange={handleOptionChange} />
                                <label>VIN number</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        {selectedOption === "email" ? (
                          <div className="input-box">
                            <label htmlFor="email">Polling Agent Email <span>*</span></label>
                            <AutoComplete className="w-100" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
                          </div>
                        ) : (
                          <div className="input-box">
                            <label htmlFor="vin">Polling Agents VIN <span>*</span></label>
                            <AutoComplete className="w-100" value={value2} suggestions={items2} completeMethod={search} onChange={(e) => setValue2(e.value)} />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                        <label>Polling Unit <span>*</span></label>
                        <AutoComplete className="w-100" value={value3} suggestions={items3} completeMethod={search} onChange={(e) => setValue3(e.value)} />
                      </div>
                    </div>

                    <div className="col-lg-12 form-radio-bx mt-3">
                      <div className="form-group">
                        <label>Polling Agent Type <span>*</span></label>
                      </div>
                      <div className="form-group-flex">
                        <div className="form-group d-flex gap-2">
                          <input type="radio" id="tra" name="fav_language" value="Trained" />
                          <label htmlFor="tra">Trained</label>
                        </div>
                        <div className="form-group d-flex gap-2">
                          <input type="radio" id="vin" name="fav_language" value="VIN" />
                          <label htmlFor="vin">VIN number</label>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 text-end">
                      <button type="submit" className="btn-event">Create</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
