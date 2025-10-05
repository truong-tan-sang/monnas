import { Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";
import { useRiceGame } from "./RiceGameContext";

export default function Outro() {
    const { finalScore, setStep, setStage, setWater, setFertilizers } = useRiceGame();

    return (
        <Dialog
            open={true}
            maxWidth="sm"
            fullWidth
        >
            <DialogContent
                sx={{
                    textAlign: "center",
                    py: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#388e3c" }}>
                    🎉 Congratulations! 🎉
                </Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>
                    Your final sustainability score:
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        mt: 1,
                        color: "#4caf50",
                        fontWeight: "bold",
                        textShadow: "2px 2px 6px rgba(0,0,0,0.2)",
                    }}
                >
                    {Math.round(finalScore ?? 0)} Kg CO₂e
                </Typography>

                <Typography sx={{ mt: 1, color: "#777" }}>
                    (Lower emissions → higher sustainability 🌾)
                </Typography>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                    variant="contained" 
                    onClick={() => {
                        setStep(0);
                        setStage(0);
                        setWater(5);
                    }}
                >
                    Finish Game
                </Button>
            </DialogActions>
        </Dialog>


    );

}