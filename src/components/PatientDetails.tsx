import { usePatientStore } from "../store";
import { Patient } from "../types/index";
import PatientDetailItem from "./PatientDetailItem";
import { toast } from "react-toastify";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);

  const handleClick = () => {
    deletePatient(patient.id);

    toast("Paciente Eliminado", {
      type: "error",
    });
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      {/* <p className="font-bold mb-3 text-gray-700 uppercase">
        ID: {""}
        <span className="font-normal normal-case">{patient.id}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{patient.name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{patient.caretaker}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{patient.email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{patient.date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">{patient.symptoms}</span>
      </p> */}

      {/* Se sustituyen los parráfos por un COMPONENTE para reutilizarlos */}
      <PatientDetailItem label="ID" data={patient.id} />

      <PatientDetailItem label="Nombre" data={patient.name} />

      <PatientDetailItem label="Propietario" data={patient.caretaker} />

      <PatientDetailItem label="Email" data={patient.email} />

      <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />

      <PatientDetailItem label="Síntomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          // onClick={() => {
          //   deletePatient(patient.id);

          //   toast.success('Paciente Eliminado Correctamente')
          // }}
          onClick={handleClick}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
