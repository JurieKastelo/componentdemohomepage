import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import GitHubLogo from "../../public/github-icon.svg";
import GitHubLogoDisabled from "../../public/github-icon-disable.svg";
import Desktop from "../../public/desktop.svg";
import Phone from "../../public/phone.svg";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ mb: 10 }}>
          <Typography fontSize={40}>Choose a library!</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Link href="https://github.com/JurieKastelo/mantine">
                <Image
                  src={GitHubLogo}
                  width={30}
                  height={30}
                  alt="GitHubLogo"
                />
              </Link>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => {
                  router.push("https://mantine-juriewagener.vercel.app/");
                }}
                sx={{ width: 260 }}
              >
                Mantine
              </Button>
              <Box sx={{ ml: 1 }}>
                <Image src={Desktop} width={30} height={30} alt="Desktop" />
              </Box>
              <Box sx={{ ml: 1 }}>
                <Image src={Phone} width={20} height={20} alt="Desktop" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <Image
                src={GitHubLogoDisabled}
                width={30}
                height={30}
                alt="GitHubLogo"
              />
              <Button
                sx={{ width: 260 }}
                disabled
                fullWidth
                variant="outlined"
                onClick={() => {
                  router.push("https://nextui-juriewagener.vercel.app/");
                }}
              >
                Next UI
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <Image
                src={GitHubLogoDisabled}
                width={30}
                height={30}
                alt="GitHubLogo"
              />
              <Button
                sx={{ width: 260 }}
                fullWidth
                disabled
                variant="outlined"
                onClick={() => {
                  router.push("/tailwind");
                }}
              >
                Tailwind
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <Image
                src={GitHubLogoDisabled}
                width={30}
                height={30}
                alt="GitHubLogo"
              />
              <Button
                sx={{ width: 260 }}
                fullWidth
                disabled
                variant="outlined"
                onClick={() => {
                  router.push("/rebass");
                }}
              >
                Rebass
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <Image
                src={GitHubLogoDisabled}
                width={30}
                height={30}
                alt="GitHubLogo"
              />
              <Button
                sx={{ width: 260 }}
                fullWidth
                disabled
                variant="outlined"
                onClick={() => {
                  router.push("/gleustack");
                }}
              >
                Gluestack
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image
                src={GitHubLogoDisabled}
                width={30}
                height={30}
                alt="GitHubLogo"
              />
              <Button
                sx={{ width: 260 }}
                fullWidth
                disabled
                variant="outlined"
                onClick={() => {
                  router.push("/gleustack");
                }}
              >
                Gluestack
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            mt: 10,
          }}
        >
          <Image
            src={GitHubLogoDisabled}
            width={30}
            height={30}
            alt="GitHubLogo"
          />
          <Button
            sx={{ width: 260 }}
            fullWidth
            disabled
            variant="outlined"
            onClick={() => {
              router.push("/randome-cool-things");
            }}
          >
            Randome Cool Things
          </Button>
        </Box>
      </Box>
    </>
  );
}
