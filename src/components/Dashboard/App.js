import React, { useState } from "react";
import { Trash2, Eye } from "lucide-react";

const styles = {
	container: {
		fontFamily: "Arial, sans-serif",
		maxWidth: "1200px",
		margin: "0 auto",
		padding: "20px",
	},
	tabs: {
		display: "flex",
		marginBottom: "20px",
	},
	activity: {
		// make the activity div take at max half of the screen vertically not horizontally
		height: "50vh",
	},
	tab: {
		padding: "10px 20px",
		fontSize: "16px",
		backgroundColor: "#f0f0f0",
		border: "none",
		cursor: "pointer",
		transition: "background-color 0.3s",
		width: "50%",
	},
	activeTab: {
		backgroundColor: "#007bff",
		color: "white",
	},
	tableHeader: {
		overflowX: "auto",
	},
	tableContainer: {
		overflowX: "auto",

		height: "40vh",
		overflowY: "auto",
	},
	table: {
		width: "100%",
		borderCollapse: "collapse",
	},
	th: {
		padding: "12px",
		textAlign: "left",
		borderBottom: "1px solid #ddd",
		backgroundColor: "#f8f8f8",
		fontWeight: "bold",
	},
	td: {
		padding: "12px",
		textAlign: "left",
		borderBottom: "1px solid #ddd",
	},
	actionButton: {
		background: "none",
		border: "none",
		cursor: "pointer",
		marginRight: "10px",
		padding: "5px",
		transition: "color 0.3s",
	},
};

const dummyData = [
	{
		id: "1",
		name: "638185258118101205_CA16L0",
		contract: "CA16L000093 ",
		PropertyName: "VALLEY VILLA",
		department: "Compliance",
		from: "Decoda Mitchell [Owner]",
		receivedDate: "05/01/2023 08:17:19",
	},
	{
		id: "2",
		name: "638185258118101205_CA16L0..",
		contract: "CA16L000093",
		PropertyName: "HAPPY VALLEY VILLA",
		department: "Compliance",
		from: "Decoda Mitchell [Owner]",
		receivedDate: "05/01/2023 08:17:18",
	},
	{
		id: "3",
		name: "638185258118101205_CA16L0..",
		contract: "CA16L000093",
		PropertyName: "HAPPY VALLEY VILLA",
		department: "Compliance",
		from: "Decoda Mitchell [Owner]",
		receivedDate: "05/01/2023 08:17:17",
	},
	{
		id: "4",
		name: "638185258118101205_CA16L0..",
		contract: "CA16L000093",
		PropertyName: "HAPPY VALLEY VILLA",
		department: "Compliance",
		from: "Decoda Mitchell [Owner]",
		receivedDate: "05/01/2023 08:17:17",
	},
	{
		id: "5",
		name: "638185258118101205_CA16L0..",
		contract: "CA16L000093",
		PropertyName: "HAPPY VALLEY VILLA",
		department: "Compliance",
		from: "Decoda Mitchell [Owner]",
		receivedDate: "05/01/2023 08:17:16",
	},
];

export default function DocumentTabs() {
	const [activeTab, setActiveTab] = useState("received");

	const handleDelete = (id) => {
		console.log(`Delete document with id: ${id}`);
	};

	const handleView = (id) => {
		console.log(`View document with id: ${id}`);
	};

	const truncateText = (text) => {
		if (text.length > 15) {
			return text.substring(0, 15) + "...";
		}
		return text;
	};

	return (
		<div className="Activity" style={styles.activity}>
			<h2>Activity</h2>

			<div style={styles.container}>
				<div style={styles.tabs}>
					<button
						style={{
							...styles.tab,
							...(activeTab === "received"
								? styles.activeTab
								: {}),
						}}
						onClick={() => setActiveTab("received")}
					>
						Doc Received
					</button>
					<button
						style={{
							...styles.tab,
							...(activeTab === "sent" ? styles.activeTab : {}),
						}}
						onClick={() => setActiveTab("sent")}
					>
						Doc Sent
					</button>
				</div>
				<div style={styles.tableHeader}>
					<table style={styles.table}>
						<thead>
							<tr>
								<th style={styles.th}>Document Name</th>
								<th style={styles.th}>Contract</th>
								<th style={styles.th}>Property Name</th>
								<th style={styles.th}>Department</th>
								<th style={styles.th}>From</th>
								<th style={styles.th}>Received Date</th>
								<th style={styles.th}>Action</th>
							</tr>
						</thead>
					</table>
				</div>

				<div style={styles.tableContainer}>
					<table style={styles.table}>
						<tbody style={styles.tbody}>
							{dummyData.map((doc, index) => (
								<tr
									key={doc.id}
									style={{
										...styles.td,
										backgroundColor:
											index % 2 === 0
												? "#ffffff"
												: "#f5f5f5",
									}}
								>
									<td style={styles.td}>
										{truncateText(doc.name)}
									</td>
									<td style={styles.td}>{doc.contract}</td>
									<td style={styles.td}>
										{doc.PropertyName}
									</td>
									<td style={styles.td}>{doc.department}</td>
									<td style={styles.td}>{doc.from}</td>
									<td style={styles.td}>
										{doc.receivedDate}
									</td>
									<td style={styles.td}>
										<button
											style={styles.actionButton}
											onClick={() => handleDelete(doc.id)}
										>
											<Trash2 size={18} />
										</button>
										<button
											style={styles.actionButton}
											onClick={() => handleView(doc.id)}
										>
											<Eye size={18} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
