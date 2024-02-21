class Patient {
  constructor(location) {
    this.location = location;
  }
}

class Hospital {
  constructor() {
    this.patients = [];
  }

  addPatient(patient) {
    this.patients.push(patient);
  }

  calculatePercentage(city) {
    const totalPatients = this.patients.length;
    if (totalPatients === 0) return 0;

    let localPatients = 0;
    for (const patient of this.patients) {
      if (patient.location.toLowerCase() === city.toLowerCase()) {
        localPatients++;
      }
    }

    return (localPatients / totalPatients) * 100;
  }

  getTotalPatients() {
    return this.patients.length;
  }
}

const hospital = new Hospital();

// Adding patients' locations
hospital.addPatient(new Patient("Bangalore"));
hospital.addPatient(new Patient("Mysore"));
hospital.addPatient(new Patient("Bangalore"));
hospital.addPatient(new Patient("Bangalore"));
hospital.addPatient(new Patient("Mangalore"));
hospital.addPatient(new Patient("Bangalore"));

const city = "Bangalore";
const localPercentage = hospital.calculatePercentage(city);
const outstationPercentage = 100 - localPercentage;
const totalPatients = hospital.getTotalPatients();

console.log(
  `From last ${totalPatients} days, ${totalPatients} OP registrations took place, of which ${localPercentage.toFixed(
    2
  )}% are from ${city} and ${outstationPercentage.toFixed(2)}% are outstation.`
);
