package com.adonay.monsters.entity.models;

import jakarta.persistence.*;

@Entity
@Table(name = "minerales")
public class Mineral {

	private static final long serialVersionUID = 1L;
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id_mineral;
	
	private String nombre;
	
	private	String material;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "mineral")
	private Habitat habitats;

	public long getId() {
		return id_mineral;
	}

	public void setId(long id_mineral) {
		this.id_mineral = id_mineral;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	public Mineral(String nombre, String material) {
		this.nombre = nombre;
		this.material = material;
	}

	public Mineral() {
	}

	@Override
	public String toString() {
		return "Mineral [id_mineral=" + id_mineral + ", nombre=" + nombre + ", material=" + material + "]";
	}


}
