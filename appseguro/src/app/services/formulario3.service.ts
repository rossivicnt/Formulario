import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formulario3 } from '../models/formulario3';
import { Export1 } from '../models/export1';
import { Subject }    from 'rxjs/Subject';
import { parseHttpResponse } from '../../../node_modules/@types/selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class Formulario3Service {
  selectedForm1: Formulario3;
  Forms1: Formulario3[];
  selectedExoport1: Export1;
  Export1: Export1[];
  public postAdded_Observable = new Subject();
	public postEdit_Observable = new Subject();
  public post_to_be_edited;
  public post_to_be_edited2;

  readonly URL_API = 'http://localhost:3000/api/form3';
  readonly URL_AP2 = 'http://localhost:3000/api/export1';

  constructor (private http: HttpClient){
    this.selectedForm1 = new Formulario3();
    this.selectedExoport1= new Export1();
    this.post_to_be_edited = new Formulario3();
    this.post_to_be_edited2 = new Export1();
  }

  getForms1(){
    return this.http.get(this.URL_API);
  }

  getExport1T(){
    return this.http.get(this.URL_AP2);
  }

  getExport1(_id: string){
    return this.http.get(this.URL_AP2 + `/${_id}`);
  }

  getId(Rut: String){
    return this.http.get(this.URL_API + `/${Rut}`)
  }

  getForm1(_id: String){
    return this.http.get('http://localhost:3000/api/form3/id' + `/${_id}`)
  }

  postForm(form1: Formulario3) {
    console.log(form1);
    return this.http.post(this.URL_API, {
      fechaRecepcion:form1.fechaRecepcion,
      inicial: form1.inicial,
      incorporacion: form1.incorporacion,
      modificacion: form1.modificacion,
      complementario: form1.complementario,
      ampliacion: form1.ampliacion,
      adicional: form1.adicional,
      vida: form1.vida,
      NombreContratante: form1.NombreContratante,
      Rut:  form1.Rut,
      Poliza:  form1.Poliza,
      Grupo:  form1.Grupo,
      Rut2: form1.Rut2,
      ApellidoPaterno: form1.ApellidoPaterno,
      ApellidoMaterno: form1.ApellidoMaterno,
      NombreTitular: form1.NombreTitular,
      FechaNacimiento:form1.FechaNacimiento,
      Sexo: form1.Sexo,
      EstadoCivil: form1.EstadoCivil,
      SistemPrevSalud: form1.SistemPrevSalud,
      Actividad: form1.Actividad,
      DireccionParticular: form1.DireccionParticular,
      Numero: form1.Numero,
      Departamento: form1.Departamento,
      Sector: form1.Sector,
      Comuna: form1.Comuna,
      Ciudad: form1.Ciudad,
      CuentaCorriente: form1.CuentaCorriente,
      TelefonoCelular: form1.TelefonoCelular,
      Peso: form1.Peso,
      Estatura: form1.Estatura,
      Email: form1.Email,
      Banco: form1.Banco,
      TelefonoFijo: form1.TelefonoFijo,
      FechaVigencia:form1.FechaVigencia,
      FechaIngresoEmpresa:form1.FechaIngresoEmpresa,
      CapitalUF: form1.CapitalUF,
      Renta: form1.Renta,
      AdNom1: form1.AdNom1,
      AdNom2: form1.AdNom2,
      AdNom3: form1.AdNom1,
      AdNom4: form1.AdNom4,
      AdRut1: form1.AdRut1,
      AdRut2: form1.AdRut2,
      AdRut3: form1.AdRut3,
      AdRut4: form1.AdRut4,
      AdFN1: form1.AdFN1,
      AdFN2: form1.AdFN2,
      AdFN3: form1.AdFN3,
      AdFN4: form1.AdFN4,
      AdParen1: form1.AdParen1,
      AdParen2: form1.AdParen2,
      AdParen3: form1.AdParen3,
      AdParen4: form1.AdParen4,
      AdSPS1: form1.AdSPS1,
      AdSPS2: form1.AdSPS2,
      AdSPS3: form1.AdSPS3,
      AdSPS4: form1.AdSPS4,
      AdPeso1: form1.AdPeso1,
      AdPeso2: form1.AdPeso2,
      AdPeso3: form1.AdPeso3,
      AdPeso4: form1.AdPeso4,
      AdEstatura1: form1.AdEstatura1,
      AdEstatura2: form1.AdEstatura2,
      AdEstatura3: form1.AdEstatura3,
      AdEstatura4: form1.AdEstatura4,
      ckSi1: form1.ckSi1,
      ckNo1: form1.ckNo1,
      ckSi2: form1.ckSi2,
      ckNo2: form1.ckNo2,
      PNom1: form1.PNom1,
      PNom2: form1.PNom2,
      PNom3: form1.PNom3,
      PNom4: form1.PNom4,
      PNom5: form1.PNom5,
      PCod1: form1.PCod1,
      PCod2: form1.PCod2,
      PCod3: form1.PCod3,
      PCod4: form1.PCod4,
      PCod5: form1.PCod5,
      PEnfer1: form1.PEnfer1,
      PEnfer2: form1.PEnfer2,
      PEnfer3: form1.PEnfer3,
      PEnfer4: form1.PEnfer4,
      PEnfer5: form1.PEnfer5,
      PFechaD1: form1.PFechaD1,
      PFechaD2: form1.PFechaD2,
      PFechaD3: form1.PFechaD3,
      PFechaD4: form1.PFechaD4,
      PFechaD5: form1.PFechaD5,
      PCond1: form1.PCond1,
      PCond2: form1.PCond2,
      PCond3: form1.PCond3,
      PCond4: form1.PCond4,
      PCond5: form1.PCond5,
      PTrata1: form1.PTrata1,
      PTrata2: form1.PTrata2,
      PTrata3: form1.PTrata3,
      PTrata4: form1.PTrata4,
      PTrata5: form1.PTrata5,
      POtros1: form1.POtros1,
      POtros2: form1.POtros2,
      POtros3: form1.POtros3,
      POtros4: form1.POtros4,
      POtros5: form1.POtros5,
      PCNS1: form1.PCNS1,
      PCNS2: form1.PCNS2,
      PCNS3: form1.PCNS3,
      PCNS4: form1.PCNS4,
      PCNS5: form1.PCNS5,
      fechaDeclaracion: form1.fechaDeclaracion,
      DNombre1: form1.DNombre1,
      DNombre2: form1.DNombre2,
      DNombre3: form1.DNombre3,
      DNombre4: form1.DNombre4,
      DDiag1: form1.DDiag1,
      DDiag2: form1.DDiag2,
      DDiag3: form1.DDiag3,
      DDiag4: form1.DDiag4,
      DFecha1: form1.DFecha1,
      DFecha2: form1.DFecha2,
      DFecha3: form1.DFecha3,
      DFecha4: form1.DFecha4,
      ckSi3: form1.ckSi3,
      ckNo3: form1.ckNo3,
      ckSi4: form1.ckSi4,
      ckNo4: form1.ckNo4,
      Quien1: form1.Quien1,
      Quien2: form1.Quien2,
      Deporte1: form1.Deporte1,
      Deporte2: form1.Deporte2,
      RazonSocial: form1.RazonSocial,
      CRut: form1.CRut,
      NroPoliza: form1.NroPoliza,
      UF: form1.UF,
      NroRentas: form1.NroRentas,
      CRut2: form1.CRut2,
      CNombre: form1.CNombre,
      CFecha: form1.CFecha,
      BNombre1: form1.BNombre1,
      BApellidoP1: form1.BApellidoP1,
      BApellidoM1: form1.BApellidoM1,
      BRut1: form1.BRut1,
      BRelacion1: form1.BRelacion1,
      BPorcentaje1: form1.BPorcentaje1,
      BMail1: form1.BMail1,
      BFono1: form1.BFono1,
      BDir1: form1.BDir1,
      BNombre2: form1.BNombre2,
      BApellidoP2: form1.BApellidoP2,
      BApellidoM2: form1.BApellidoM2,
      BRut2: form1.BRut2,
      BRelacion2: form1.BRelacion2,
      BPorcentaje2: form1.BPorcentaje2,
      BMail2: form1.BMail2,
      BFono2: form1.BFono2,
      BDir2: form1.BDir2,
      BNombre3: form1.BNombre3,
      BApellidoP3: form1.BApellidoP3,
      BApellidoM3: form1.BApellidoM3,
      BRut3: form1.BRut3,
      BRelacion3: form1.BRelacion3,
      BPorcentaje3: form1.BPorcentaje3,
      BMail3: form1.BMail3,
      BFono3: form1.BFono3,
      BDir3: form1.BDir3,
      BNombre4: form1.BNombre4,
      BApellidoP4: form1.BApellidoP4,
      BApellidoM4: form1.BApellidoM4,
      BRut4: form1.BRut4,
      BRelacion4: form1.BRelacion4,
      BPorcentaje4: form1.BPorcentaje4,
      BMail4: form1.BMail4,
      BFono4: form1.BFono4,
      BDir4: form1.BDir4,
      BNombre5: form1.BNombre5,
      BApellidoP5: form1.BApellidoP5,
      BApellidoM5: form1.BApellidoM5,
      BRut5: form1.BRut5,
      BRelacion5: form1.BRelacion5,
      BPorcentaje5: form1.BPorcentaje5,
      BMail5: form1.BMail5,
      BFono5: form1.BFono5,
      BDir5: form1.BDir5,
      ck: form1.ck,
      fechaf: form1.fechaf,
      ckPolizaVida: form1.ckPolizaVida,
      ckPoliza: form1.ckPoliza,
      FechaIniVig: form1.FechaIniVig,
      Poliza1: form1.Poliza1,
      Poliza2: form1.Poliza2,
      CodPlanes: form1.CodPlanes
    });  
  }
  
  postExport( usuario: string, date: Date, file: string, formulario: string ){
    console.log(usuario, date, file, formulario);
    return this.http.post(this.URL_AP2, {
      usuario: usuario,
      date: date,
      file: file,
      formulario: formulario
    });
  }

  putForm(form1: Formulario3) {
    return this.http.put(this.URL_API + `/${form1._id}`, {
      id: form1._id,
      fechaRecepcion:form1.fechaRecepcion,
      inicial: form1.inicial,
      incorporacion: form1.incorporacion,
      modificacion: form1.modificacion,
      complementario: form1.complementario,
      ampliacion: form1.ampliacion,
      adicional: form1.adicional,
      vida: form1.vida,
      NombreContratante: form1.NombreContratante,
      Rut:  form1.Rut,
      Poliza:  form1.Poliza,
      Grupo:  form1.Grupo,
      Rut2: form1.Rut2,
      ApellidoPaterno: form1.ApellidoPaterno,
      ApellidoMaterno: form1.ApellidoMaterno,
      NombreTitular: form1.NombreTitular,
      FechaNacimiento:form1.FechaNacimiento,
      Sexo: form1.Sexo,
      EstadoCivil: form1.EstadoCivil,
      SistemPrevSalud: form1.SistemPrevSalud,
      Actividad: form1.Actividad,
      DireccionParticular: form1.DireccionParticular,
      Numero: form1.Numero,
      Departamento: form1.Departamento,
      Sector: form1.Sector,
      Comuna: form1.Comuna,
      Ciudad: form1.Ciudad,
      CuentaCorriente: form1.CuentaCorriente,
      TelefonoCelular: form1.TelefonoCelular,
      Peso: form1.Peso,
      Estatura: form1.Estatura,
      Email: form1.Email,
      Banco: form1.Banco,
      TelefonoFijo: form1.TelefonoFijo,
      FechaVigencia:form1.FechaVigencia,
      FechaIngresoEmpresa:form1.FechaIngresoEmpresa,
      CapitalUF: form1.CapitalUF,
      Renta: form1.Renta,
      AdNom1: form1.AdNom1,
      AdNom2: form1.AdNom2,
      AdNom3: form1.AdNom1,
      AdNom4: form1.AdNom4,
      AdRut1: form1.AdRut1,
      AdRut2: form1.AdRut2,
      AdRut3: form1.AdRut3,
      AdRut4: form1.AdRut4,
      AdFN1: form1.AdFN1,
      AdFN2: form1.AdFN2,
      AdFN3: form1.AdFN3,
      AdFN4: form1.AdFN4,
      AdParen1: form1.AdParen1,
      AdParen2: form1.AdParen2,
      AdParen3: form1.AdParen3,
      AdParen4: form1.AdParen4,
      AdSPS1: form1.AdSPS1,
      AdSPS2: form1.AdSPS2,
      AdSPS3: form1.AdSPS3,
      AdSPS4: form1.AdSPS4,
      AdPeso1: form1.AdPeso1,
      AdPeso2: form1.AdPeso2,
      AdPeso3: form1.AdPeso3,
      AdPeso4: form1.AdPeso4,
      AdEstatura1: form1.AdEstatura1,
      AdEstatura2: form1.AdEstatura2,
      AdEstatura3: form1.AdEstatura3,
      AdEstatura4: form1.AdEstatura4,
      ckSi1: form1.ckSi1,
      ckNo1: form1.ckNo1,
      ckSi2: form1.ckSi2,
      ckNo2: form1.ckNo2,
      PNom1: form1.PNom1,
      PNom2: form1.PNom2,
      PNom3: form1.PNom3,
      PNom4: form1.PNom4,
      PNom5: form1.PNom5,
      PCod1: form1.PCod1,
      PCod2: form1.PCod2,
      PCod3: form1.PCod3,
      PCod4: form1.PCod4,
      PCod5: form1.PCod5,
      PEnfer1: form1.PEnfer1,
      PEnfer2: form1.PEnfer2,
      PEnfer3: form1.PEnfer3,
      PEnfer4: form1.PEnfer4,
      PEnfer5: form1.PEnfer5,
      PFechaD1: form1.PFechaD1,
      PFechaD2: form1.PFechaD2,
      PFechaD3: form1.PFechaD3,
      PFechaD4: form1.PFechaD4,
      PFechaD5: form1.PFechaD5,
      PCond1: form1.PCond1,
      PCond2: form1.PCond2,
      PCond3: form1.PCond3,
      PCond4: form1.PCond4,
      PCond5: form1.PCond5,
      PTrata1: form1.PTrata1,
      PTrata2: form1.PTrata2,
      PTrata3: form1.PTrata3,
      PTrata4: form1.PTrata4,
      PTrata5: form1.PTrata5,
      POtros1: form1.POtros1,
      POtros2: form1.POtros2,
      POtros3: form1.POtros3,
      POtros4: form1.POtros4,
      POtros5: form1.POtros5,
      PCNS1: form1.PCNS1,
      PCNS2: form1.PCNS2,
      PCNS3: form1.PCNS3,
      PCNS4: form1.PCNS4,
      PCNS5: form1.PCNS5,
      fechaDeclaracion: form1.fechaDeclaracion,
      DNombre1: form1.DNombre1,
      DNombre2: form1.DNombre2,
      DNombre3: form1.DNombre3,
      DNombre4: form1.DNombre4,
      DDiag1: form1.DDiag1,
      DDiag2: form1.DDiag2,
      DDiag3: form1.DDiag3,
      DDiag4: form1.DDiag4,
      DFecha1: form1.DFecha1,
      DFecha2: form1.DFecha2,
      DFecha3: form1.DFecha3,
      DFecha4: form1.DFecha4,
      ckSi3: form1.ckSi3,
      ckNo3: form1.ckNo3,
      ckSi4: form1.ckSi4,
      ckNo4: form1.ckNo4,
      Quien1: form1.Quien1,
      Quien2: form1.Quien2,
      Deporte1: form1.Deporte1,
      Deporte2: form1.Deporte2,
      RazonSocial: form1.RazonSocial,
      CRut: form1.CRut,
      NroPoliza: form1.NroPoliza,
      UF: form1.UF,
      NroRentas: form1.NroRentas,
      CRut2: form1.CRut2,
      CNombre: form1.CNombre,
      CFecha: form1.CFecha,
      BNombre1: form1.BNombre1,
      BApellidoP1: form1.BApellidoP1,
      BApellidoM1: form1.BApellidoM1,
      BRut1: form1.BRut1,
      BRelacion1: form1.BRelacion1,
      BPorcentaje1: form1.BPorcentaje1,
      BMail1: form1.BMail1,
      BFono1: form1.BFono1,
      BDir1: form1.BDir1,
      BNombre2: form1.BNombre2,
      BApellidoP2: form1.BApellidoP2,
      BApellidoM2: form1.BApellidoM2,
      BRut2: form1.BRut2,
      BRelacion2: form1.BRelacion2,
      BPorcentaje2: form1.BPorcentaje2,
      BMail2: form1.BMail2,
      BFono2: form1.BFono2,
      BDir2: form1.BDir2,
      BNombre3: form1.BNombre3,
      BApellidoP3: form1.BApellidoP3,
      BApellidoM3: form1.BApellidoM3,
      BRut3: form1.BRut3,
      BRelacion3: form1.BRelacion3,
      BPorcentaje3: form1.BPorcentaje3,
      BMail3: form1.BMail3,
      BFono3: form1.BFono3,
      BDir3: form1.BDir3,
      BNombre4: form1.BNombre4,
      BApellidoP4: form1.BApellidoP4,
      BApellidoM4: form1.BApellidoM4,
      BRut4: form1.BRut4,
      BRelacion4: form1.BRelacion4,
      BPorcentaje4: form1.BPorcentaje4,
      BMail4: form1.BMail4,
      BFono4: form1.BFono4,
      BDir4: form1.BDir4,
      BNombre5: form1.BNombre5,
      BApellidoP5: form1.BApellidoP5,
      BApellidoM5: form1.BApellidoM5,
      BRut5: form1.BRut5,
      BRelacion5: form1.BRelacion5,
      BPorcentaje5: form1.BPorcentaje5,
      BMail5: form1.BMail5,
      BFono5: form1.BFono5,
      BDir5: form1.BDir5,
      ck: form1.ck,
      fechaf: form1.fechaf,
      ckPolizaVida: form1.ckPolizaVida,
      ckPoliza: form1.ckPoliza,
      FechaIniVig: form1.FechaIniVig,
      Poliza1: form1.Poliza1,
      Poliza2: form1.Poliza2,
      CodPlanes: form1.CodPlanes
    });
  }

  putExport(_id: string, usuario: string, date: string, file: string, formulario: string){
    return this.http.put(this.URL_AP2 + `/${_id}`, {
      usuario: usuario,
      date: date,
      file: file,
      formulario:formulario
    });
  }

  deleteForm(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  deleteExport(_id:string){
    return this.http.delete(this.URL_AP2 + `/${_id}`);
  }

  notifyPostEdit(){
		this.postEdit_Observable.next();
	}

	setPostToEdit(user: Formulario3){
		this.post_to_be_edited = user;
		this.notifyPostEdit();
  }
  
  setPostToEdit2(user: Export1){
		this.post_to_be_edited2 = user;
		this.notifyPostEdit();
	}

	notifyPostAddition(){
		this.postAdded_Observable.next();
	}
}
