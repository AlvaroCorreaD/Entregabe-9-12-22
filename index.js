var Auto = /** @class */ (function () {
    function Auto(paramMarca, paramModelo, paramTipoV, paramCantP, paramCilindrada, paramLitrosB) {
        this.marcaAuto = paramMarca;
        this.modeloAuto = paramModelo;
        this.tipoVehiculo = paramTipoV;
        this.cantPuertas = paramCantP;
        this.cilindradaMotor = paramCilindrada;
        this.litrosBaul = paramLitrosB;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.encendidoAapagado === true) {
            this.encendidoAapagado = false;
        }
        else {
            this.encendidoAapagado = true;
        }
    };
    Auto.prototype.getMarca = function () {
        return this.marcaAuto;
    };
    Auto.prototype.getModelo = function () {
        return this.modeloAuto;
    };
    Auto.prototype.getTipo = function () {
        return this.tipoVehiculo;
    };
    Auto.prototype.setNumpuertas = function () {
        return this.cantPuertas;
    };
    Auto.prototype.setCilindrada = function () {
        return this.cilindradaMotor;
    };
    Auto.prototype.setLitrosBaul = function () {
        return this.litrosBaul;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(paramActualizarReg, paramCrearAuto, paramBorrarAuto) {
        this.estadoActualizar = paramActualizarReg;
        this.estadoDarDeAlta = paramCrearAuto;
        this.estadoBorrar = paramBorrarAuto;
    }
    RegistroAutomotor.prototype.actualizarRegistro = function () {
        return this.estadoActualizar;
    };
    RegistroAutomotor.prototype.darAltaRegistro = function () {
        if (this.estadoDarDeAlta === true) {
            this.estadoDarDeAlta = false;
        }
        else {
            this.estadoDarDeAlta = true;
        }
    };
    RegistroAutomotor.prototype.borrarRegistro = function () {
        if (this.estadoBorrar === true) {
            this.estadoBorrar = false;
        }
        else {
            this.estadoBorrar = true;
        }
    };
    return RegistroAutomotor;
}());
var auto1 = new Auto("VolksWagen", "Taos", "SUV", 4, 4, 498);
var auto2 = new Auto("Chevrolet", "Onix Plus", "Sedan", 4, 3, 469);
var auto3 = new Auto("Toyota", "GR-86", "Depotrivo", 2, 4, 290);
var registro1 = new RegistroAutomotor("Nuevo", true, false);
var registro2 = new RegistroAutomotor("Usado", false, true);
var registro3 = new RegistroAutomotor("Nuevo", true, false);
var vehiculos = [auto1, auto2, auto3];
var registros = [registro1, registro2, registro3];
console.log(auto1.getMarca(), auto1.getModelo(), registro1.actualizarRegistro());
console.log("Primer Vehiculo: ", vehiculos[0].getMarca(), vehiculos[0].getModelo());
console.log("Listado: ", registros[0].actualizarRegistro());
