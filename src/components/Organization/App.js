import React, { useState } from "react";

const styles = {
	container: {
		fontFamily: "Arial, sans-serif",
		maxWidth: "600px",
		margin: "0 auto",
		padding: "20px",
		backgroundColor: "#f0f0f0",
		borderRadius: "8px",
	},
	header: {
		backgroundColor: "#d0d0d0",
		padding: "10px",
		marginBottom: "10px",
		fontWeight: "bold",
		borderRadius: "4px",
	},
	form: {
		backgroundColor: "white",
		padding: "20px",
		borderRadius: "4px",
	},
	formHeader: {
		backgroundColor: "#e0e0e0",
		padding: "10px",
		marginBottom: "15px",
		borderRadius: "4px",
	},
	formGroup: {
		display: "grid",
		gridTemplateColumns: "1fr 2fr",
		gap: "10px",
		marginBottom: "15px",
	},
	label: {
		fontWeight: "bold",
		alignSelf: "center",
	},
	input: {
		width: "100%",
		padding: "8px",
		border: "1px solid #ccc",
		borderRadius: "4px",
	},
	select: {
		width: "100%",
		padding: "8px",
		border: "1px solid #ccc",
		borderRadius: "4px",
		backgroundColor: "white",
	},
	buttonGroup: {
		display: "flex",
		justifyContent: "center",
		gap: "10px",
		marginTop: "20px",
	},
	button: {
		padding: "10px 20px",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer",
	},
	editButton: {
		backgroundColor: "#ffc107",
		color: "black",
	},
	undoButton: {
		backgroundColor: "#6c757d",
		color: "white",
	},
	saveButton: {
		backgroundColor: "#28a745",
		color: "white",
	},
};

export default function Organization() {
	const [formData, setFormData] = useState({
		email: "armine.petrosyan@hacla.org",
		userName: "OrgNameUser1",
		password: "123",
		name: "LA LOMOD",
		contactPerson: "Armine",
		status: "Active",
	});

	const [isEditing, setIsEditing] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleEdit = () => setIsEditing(true);
	const handleUndo = () => {
		setFormData({
			email: "armine.petrosyan@hacla.org",
			userName: "OrgNameUser1",
			password: "123",
			name: "LA LOMOD",
			contactPerson: "Armine",
			status: "Active",
		});
		setIsEditing(false);
	};
	const handleSave = () => {
		console.log("Saving data:", formData);
		setIsEditing(false);
	};

	return (
		<div style={styles.container}>
			<div style={styles.header}>Organization</div>
			<div style={styles.form}>
				<div style={styles.formHeader}>Organization Details</div>
				<div style={styles.formGroup}>
					<label style={styles.label} htmlFor="email">
						Email*
					</label>
					<input
						style={styles.input}
						id="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						disabled={!isEditing}
					/>
				</div>
				<div style={styles.formGroup}>
					<label style={styles.label} htmlFor="userName">
						User Name*
					</label>
					<input
						style={styles.input}
						id="userName"
						name="userName"
						value={formData.userName}
						onChange={handleInputChange}
						disabled={!isEditing}
					/>
				</div>
				<div style={styles.formGroup}>
					<label style={styles.label} htmlFor="password">
						Password*
					</label>
					<input
						style={styles.input}
						id="password"
						name="password"
						type="password"
						value={formData.password}
						onChange={handleInputChange}
						disabled={!isEditing}
					/>
				</div>
				<div style={styles.formGroup}>
					<label style={styles.label} htmlFor="name">
						Name*
					</label>
					<input
						style={styles.input}
						id="name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						disabled={!isEditing}
					/>
				</div>
				<div style={styles.formGroup}>
					<label style={styles.label} htmlFor="contactPerson">
						Contact Person*
					</label>
					<input
						style={styles.input}
						id="contactPerson"
						name="contactPerson"
						value={formData.contactPerson}
						onChange={handleInputChange}
						disabled={!isEditing}
					/>
				</div>
				<div style={styles.formGroup}>
					<label style={styles.label} htmlFor="status">
						Status*
					</label>
					<select
						style={styles.select}
						id="status"
						name="status"
						value={formData.status}
						onChange={handleInputChange}
						disabled={!isEditing}
					>
						<option value="Active">Active</option>
						<option value="Inactive">Inactive</option>
					</select>
				</div>
			</div>
			<div style={styles.buttonGroup}>
				<button
					style={{ ...styles.button, ...styles.editButton }}
					onClick={handleEdit}
				>
					Edit
				</button>
				<button
					style={{ ...styles.button, ...styles.undoButton }}
					onClick={handleUndo}
					disabled={!isEditing}
				>
					Undo
				</button>
				<button
					style={{ ...styles.button, ...styles.saveButton }}
					onClick={handleSave}
					disabled={!isEditing}
				>
					Save
				</button>
			</div>
		</div>
	);
}
