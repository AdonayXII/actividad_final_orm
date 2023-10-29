package com.adonay.monsters.entity.models;

import java.util.List;	
import jakarta.persistence.*;

@Entity
@Table(name="monsters")
public class Monster {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id_monster;
	
	private String nombre;
	
	private String tipo;
	
	@OneToMany(mappedBy = "monstruo", cascade = CascadeType.ALL)
	private List<Habitat> habitats;

	public long getId() {
		return id_monster;
	}

	public void setId(long id_monster) {
		this.id_monster = id_monster;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Monster(String nombre, String tipo) {
		this.nombre = nombre;
		this.tipo = tipo;
	}

	public Monster() {
	}

	@Override
	public String toString() {
		return "Monster [id_monster=" + id_monster + ", nombre=" + nombre + ", tipo=" + tipo + "]";
	}

	
	
}
