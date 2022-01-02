import logo from './logo.svg';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NumericInput from 'react-numeric-input';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Multiselect from 'multiselect-react-dropdown';
// require('./dropdown.js');


var state = {
  options: [{ name: 'animation', id: 1 }, { name: 'miniSeries', id: 2 }, { name: 'movie', id: 3 }, { name: 'series', id: 4 }, { name: 'short', id: 5 }, { name: 'special', id: 6 }]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflix</h1>
      </header>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formSearch">
            <Form.Label>Search: </Form.Label>
            <Form.Control type="string" placeholder="Search here..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="typeSearch">
            <Form.Label>Type: </Form.Label>
            {['animation', 'miniSeries', 'movie', 'series', 'short', 'special'].map((type) => (
              <div key={`${type}`} className="mb-3">
                <Form.Check
                  type="checkbox"
                  id={`${type}`}
                  label={`${type}`}
                />
              </div>
            ))}
          </Form.Group>

          <Form.Group className="mb-3" controlId="startYearSearch">
            <Form.Label>Start Year: </Form.Label>
            <NumericInput className="form-control" style={false} min={0} max={3000} />
            TO
            <NumericInput className="form-control" style={false} min={0} max={3000} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="endYearSearch">
            <Form.Label>End Year: </Form.Label>
            <NumericInput className="form-control" style={false} min={0} max={3000} />
            TO
            <NumericInput className="form-control" style={false} min={0} max={3000} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="episodesSearch">
            <Form.Label>Number Episodes: </Form.Label>
            <NumericInput className="form-control" style={false} min={0} max={10000} />
            TO
            <NumericInput className="form-control" style={false} min={0} max={10000} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="runtimeSearch">
            <Form.Label>Runtime: </Form.Label>
            <NumericInput className="form-control" style={false} min={0} max={10000} />
            TO
            <NumericInput className="form-control" style={false} min={0} max={10000} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ratingSearch">
            <Form.Label>Rating: </Form.Label>
            <NumericInput className="form-control" style={false} min={0} max={10} />
            TO
            <NumericInput className="form-control" style={false} min={0} max={10} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="numVotesSearch">
            <Form.Label>Num Votes: </Form.Label>
            <NumericInput className="form-control" style={false} min={0} max={10000000} />
            TO
            <NumericInput className="form-control" style={false} min={0} max={10000000} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Dropdown className="d-inline mx-2" autoClose={false}>
          <Dropdown.Toggle id="dropdown-autoclose-false">
            Manual Close
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {['animation', 'miniSeries', 'movie', 'series', 'short', 'special'].map((type) => (
              <Dropdown.Item href="#">
                <div key={`${type}`} className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id={`${type}`}
                    label={`${type}`}
                  />
                </div>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Multiselect
          options={state.options} // Options to display in the dropdown
          selectedValues={state.selectedValue} // Preselected value to persist in dropdown
          displayValue="name" // Property name to display in the dropdown options
        />

      <div id="dropdownCont">

      </div>
      </div>
    </div>
  );
}

export default App;