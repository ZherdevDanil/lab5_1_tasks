const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

const currentDate = new Date();

const getNotExpiredMedicine = Object.entries(medicines)
    .filter(([name, expiryDate]) => expiryDate > currentDate)
    .sort((a, b) => a[1] - b[1])
    .map(([name, expiryDate]) => name);


console.log(getNotExpiredMedicine);