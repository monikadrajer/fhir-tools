package org.sitenv.spring.dao;

import org.sitenv.spring.model.DafDocumentReference;

import java.util.Date;
import java.util.List;

/**
 * Created by Prabhushankar.Byrapp on 8/8/2015.
 */
public interface DocumentReferenceDao {

    public List<DafDocumentReference> getAllDocumentReference();

    public DafDocumentReference getDocumentReferenceById(int id);

    public List<DafDocumentReference> getDocumentReferenceByIdentifier(String identifierSystem, String identifierValue);

    public List<DafDocumentReference> getDocumentReferenceBySubject(String subject);

    public List<DafDocumentReference> getDocumentReferenceBySubjectIdentifier(String identifierSystem, String identifierValue);

    public List<DafDocumentReference> getDocumentReferenceByCreatedDate(String comparatorStr, Date createdDate);

    public List<DafDocumentReference> getDocumentReferenceByCreatedDateOptional(String patientId, String comparatorStr, Date createdDate);

    public List<DafDocumentReference> getDocumentReferenceByPeriod(String fromComparatorStr, Date fromDate, String toComparatorStr, Date toDate);

    public List<DafDocumentReference> getDocumentReferenceByType(String identifierSystem, String identifierValue);

    public List<DafDocumentReference> getDocumentReferenceByTypeOptional(String patientId, String identifierSystem, String identifierValue);

    public List<DafDocumentReference> getDocumentReferenceByStatus(String status);


}
