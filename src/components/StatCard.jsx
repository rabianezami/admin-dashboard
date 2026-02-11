import { People, ShoppingCart, AttachMoney, Chat } from "@mui/icons-material"
import { Card, CardContent, Typography, Box } from "@mui/material"


function PickIcon(name) {
    switch (name) {
        case "people":
            return <People />
        case "shopping":
            return <ShoppingCart />
        case "money":
            return <AttachMoney />
        case "chat":
            return <Chat />
        default:
            return <People />

    }
}

export default function StatCard({ label, value, icon }) {
    return (
        <Card variant="outlined">
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {label}
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 0.5 }}>
                        {value}
                    </Typography>
                </Box>

                <Box sx={{ fontSize: 40, color: "text.secondary" }}>
                    {PickIcon(icon)}
                </Box>
            </CardContent>
        </Card>
    )
}