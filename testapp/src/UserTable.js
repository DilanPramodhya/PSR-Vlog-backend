import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

const UserTable = ({ rows, selectedUser, deleteUser }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ backgroundColor: "slategray" }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ margin: "0px 10px", color: "#0d6623" }}
                    onClick={() => selectedUser({ id: row.id, name: row.name })}
                  >
                    Update
                  </Button>
                  <Button
                    sx={{ margin: "0px 10px", color: "red" }}
                    onClick={() => deleteUser({ id: row.id })}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                No Data ....
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
