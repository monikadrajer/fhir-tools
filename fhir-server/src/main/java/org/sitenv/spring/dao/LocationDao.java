package org.sitenv.spring.dao;

import java.util.List;

import org.sitenv.spring.model.DafLocation;
import org.sitenv.spring.query.LocationSearchCriteria;

public interface LocationDao {
	public List<DafLocation> getAllLocations();

    public DafLocation getLocationById(int id);

    public List<DafLocation> getLocationBySearchCriteria(LocationSearchCriteria locationSearchCriteria);
}