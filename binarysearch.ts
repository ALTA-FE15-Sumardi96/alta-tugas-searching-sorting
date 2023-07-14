interface Karyawan {
  id: number;
  nama: string;
}

function binarySearch(arr: Karyawan[], targetId: number): Karyawan | null {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const karyawan = arr[mid];

    if (karyawan.id === targetId) {
      return karyawan;
    }

    if (karyawan.id < targetId) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

// Contoh penggunaan:
const dataKaryawan: Karyawan[] = [
  { id: 101, nama: "Rani" },
  { id: 203, nama: "Andi" },
  { id: 305, nama: "Budi" },
  { id: 410, nama: "Citra" },
  { id: 512, nama: "Dewi" },
];

const targetId = 305;
const hasilPencarian = binarySearch(dataKaryawan, targetId);

if (hasilPencarian) {
  console.log("Data karyawan ditemukan:");
  console.log(hasilPencarian);
} else {
  console.log("Data karyawan tidak ditemukan.");
}
