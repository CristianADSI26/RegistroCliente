import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formularioPractica: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formularioPractica = this.formBuilder.group({

      nombre1: [""],
      nombre2: [""],
      apellido1: [""],
      apellido2: [""],
      tdocument: [""],
      document: [""],
      email: [""],
      genero: [""],
      telefono: [""],
      celular: [""],
      comentarios: [""],
      // NombrePropietario: ["", [Validators.required]],
      // ApellidoPropietario: [""],
    });

  }

  FuncionFormulario() {

    let texto = "";

    texto += (
      "Nombre: " + this.formularioPractica.controls['nombre1'].value + " " + this.formularioPractica.controls['nombre2'].value + "\n" +
      "Apellido: " + this.formularioPractica.controls['apellido1'].value + " " + this.formularioPractica.controls['apellido2'].value + "\n" +
      "Tipo de documento: " + this.formularioPractica.controls['tdocument'].value + "\n" +
      "Documento: " + this.formularioPractica.controls['document'].value + "\n" +
      "Genero: " + this.formularioPractica.controls['genero'].value + "\n" +
      "E-Mail: " + this.formularioPractica.controls['email'].value + "\n" +
      "Telefono: " + this.formularioPractica.controls['telefono'].value + "\n" +
      "Celular: " + this.formularioPractica.controls['celular'].value + "\n" +
      "Comentario: " + this.formularioPractica.controls['comentarios'].value
    );

    document.getElementById("persona").innerHTML = texto;

    // alert("Entro a la funcion")
    // alert(this.formularioPractica.controls['NombrePropietario'].value);
    // alert(this.formularioPractica.controls['ApellidoPropietario'].value);

  }

}
