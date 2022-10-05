import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DropDownMenu from './DropDownMenu.jsx';
import BlockIcon from '@mui/icons-material/Block';
import AddUserModal from './AddUserModal.jsx';
import { useState } from 'react';

const DashboardDetails = () => {
	const [isAddNew, setIsAddNew] = useState(false);
	const handleClose = () => setIsAddNew(false);
	return (
		<>
			<div className="d-flex justify-content-between mb-3">
				<h3>User Management</h3>
				<Button variant="success" onClick={(e) => setIsAddNew(true)}>
					Add New
				</Button>
			</div>
			{isAddNew && <AddUserModal show={isAddNew} handleClose={handleClose} />}

			<div className="border">
				<Form className="d-flex flex-column flex-md-row align-items-center gap-2 w-75 p-4">
					<Form.Control
						type="text"
						placeholder="Search "
						className="ps-4 w-50"
						aria-label="Search"
					/>
					<SearchIcon className="position-absolute left-20 " />
					<Form.Control
						type="text"
						placeholder="user name"
						className="w-25"
						aria-label="Search"
					/>
					<Dropdown autoClose="outside" variant="light">
						<Dropdown.Toggle variant="outline-secondary">
							User Status
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item>
								<Form.Check type="checkbox" label="asd" />
							</Dropdown.Item>
							<Dropdown.Item>
								<Form.Check type="checkbox" label="2" />
							</Dropdown.Item>
							<Dropdown.Item>
								<Form.Check type="checkbox" label="3" />
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control type="Date" placeholder="Date" className="w-25" />
					<a href="#a">All Filters</a>
				</Form>

				<div className=" p-4">
					<Stack gap={4} direction="horizontal">
						5 selected
						<div className="vr" />
						<Button variant="secondary" size="sm">
							<EditIcon />
						</Button>
						<Button variant="secondary" size="sm">
							<BlockIcon />
						</Button>
						<Button variant="secondary" size="sm">
							<LockOutlinedIcon />
						</Button>
						<Button variant="secondary">Assign to Profile </Button>
						<Button variant="secondary">Assign to Group </Button>
						<Button variant="secondary" size="sm">
							<MoreVertOutlinedIcon />
						</Button>
						<a href="#">Unselect all</a>
						<Button className="ms-auto" variant="secondary">
							<DownloadIcon />
						</Button>
					</Stack>
				</div>

				<Table bordered hover className="mb-0">
					<thead>
						<tr>
							<th className="text-center">
								<Form.Check type="checkbox" varient="success" />
							</th>
							<th>User Name</th>
							<th>Email</th>
							<th>Group</th>
							<th>Status</th>
							<th>Created On</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="text-center">
								<Form.Check type="checkbox" />
							</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>@mdo</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td className="text-center">
								<Form.Check type="checkbox" />
							</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
							<td>@mdo</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td className="text-center">
								<Form.Check type="checkbox" />
							</td>
							<td>Larry the Bird</td>
							<td>Larry the Bird</td>
							<td>@twitter</td>
							<td>@mdo</td>
							<td>@mdo</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	);
};

export default DashboardDetails;
