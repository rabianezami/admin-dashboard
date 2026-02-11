import { Paper, Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Chip, TableContainer } from "@mui/material"

import { users } from "../data/dashboardData"

function statusChipColor(status) {
    if (status === "Active") return "success"
    if (status === "Pending") return "warning"
    if (status === "Blocked") return "error"
    return "default"
}

export default function UserTable() {
    return (
        <Paper variant="outlined" sx={{ mt: 2, p: 2, overflow: "auto" }}>
            <Box sx={{ display: "flex", alignItmes: "center", }}>
                <Typography variant="h6">Users</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Total: {users.length}
                </Typography>
            </Box>

            <TableContainer>
                  <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Email</b></TableCell>
                        <TableCell><b>Role</b></TableCell>
                        <TableCell><b>Status</b></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {users.map((u) => (
                        <TableRow key={u.id}>
                            <TableCell>{u.name}</TableCell>
                            <TableCell>{u.email}</TableCell>
                            <TableCell>{u.role}</TableCell>
                            <TableCell>
                                <Chip label={u.status} color={statusChipColor(u.status)} size="small" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Paper>
    )
}