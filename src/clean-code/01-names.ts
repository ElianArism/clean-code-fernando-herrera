;(() => {
  // Ejemplo 1
  // Archivos a evaluar - files to evaluate
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ]

  // Archivos marcados para borrar - files to delete
  const arhivos = fs.map((f) => f.f)

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea 2.

  // día de hoy - today - a
  const ddmmyyyy = new Date()

  // días transcurridos - elapsed time in days - b
  const d: number = 23

  // número de archivos en un directorio - number of files in directory - c
  const dir = 33

  // primer nombre - first name - d
  const nombre = "Fernando"

  // primer apellido - last name - e
  const apellido = "Herrera"

  // días desde la última modificación - days since modification - f
  const dsm = 12

  // cantidad máxima de clases por estudiante - max classes per student - g
  const max = 6

  // -------------------------------
  // -------------------------------
  // Corregido
  // -------------------------------
  // -------------------------------

  const filesToEvaluate = [
    { id: 1, mustBeDeleted: false },
    { id: 2, mustBeDeleted: false },
    { id: 3, mustBeDeleted: true },
    { id: 4, mustBeDeleted: false },
    { id: 5, mustBeDeleted: false },
    { id: 7, mustBeDeleted: true },
  ]

  const filesToDelete = filesToEvaluate.map(
    (file) => file.mustBeDeleted
  )

  // Todo: Tarea

  // día de hoy - a
  const today = new Date()

  // días transcurridos - b
  const elapsedTimeInDays: number = 23

  // número de archivos en un directorio - c
  const numberOfFilesInDirectory = 33

  // primer nombre - d
  const firstName = "Fernando"

  // primer apellido - e
  const lastName = "Herrera"

  // días desde la última modificación  - f
  const diasSinceModification = 12

  // cantidad máxima de clases por estudiante - g
  const maxClassesPerStudent = 6
})()
