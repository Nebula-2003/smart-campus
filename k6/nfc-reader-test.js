import { check, sleep } from "k6";
import { randomBytes } from "k6/crypto";
import http from "k6/http";

function randomString(length = 16) {
    return randomBytes(length).toString("hex"); // base64 also works if you prefer
}
// 1. Options: how many virtual users and how long
export const options = {
    stages: [
        { duration: "10s", target: 100 },
        { duration: "20s", target: 500 },
        { duration: "30s", target: 1000 },
        { duration: "1m", target: 2000 }, // go wild
        { duration: "30s", target: 0 },
    ],
    thresholds: {
        http_req_failed: ["rate<0.1"], // fail the test if >10% requests fail
    },
};

export default function () {
    const url = "http://localhost:8080/api/nfc-reader/";
    const payload = JSON.stringify({
        nfcTag: randomString(),
        scannerId: randomString(),
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = http.post(url, payload, params);

    check(res, {
        "is status 200": (r) => r.status === 200,
    });

    sleep(1); // Simulate think time
}
