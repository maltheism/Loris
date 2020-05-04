Little reminder of BIDS structure:

```
.
|__ dataset_description.json
|__ README
|__ .bids-validator-config.json
|__ participants.tsv
|__ participants.json
|__ sub-{candid}
    |__ ses-{visit}
    |__ ses-{visit}
        |__ sub-{candid}_ses-{visit}_scans.tsv
        |__ sub-{candid}_ses-{visit}_scans.json
        |__ anat
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.nii.gz
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.json
        |__ asl
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.nii.gz
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.json
        |__ dwi
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.nii.gz
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.json
        |__ fmap
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.nii.gz
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.json
        |__ func
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.nii.gz
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.json
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.nii.gz
            |__ sub-{candid}_ses-{visit}_run-{nb}_{scan_type}.json
...
```









## 1) add a bids endpoint to projects

`api/v0.0.3-dev/projects/loris/bids`

which would return the following JSON:
```json
{
  "DatasetDescription": {
    "Link": "/projects/loris/bids/dataset_description.json"
  },
  "README": {
    "Link": "/projects/loris/bids/README"
  },
  "BidsValidatorConfig": {
    "Link": "/projects/loris/bids/.bids-validator-config.json"
  },
  "Participants": {
    "TsvLink": "/projects/loris/bids/participants.tsv",
    "JsonLink": "/projects/loris/bids/participants.json"
  },
  "SessionFiles": [
    {
      "Candidate": {candid},
      "PSCID"    : {pscid]},
      "Visit"    : {visit},
      "TsvLink"  : "/candidates/{candid}/{visit}/bidsfiles/sub-{candid}_ses-{visit}_scans.tsv",
      "JsonLink" : "/candidates/{candid}/{visit}/bidsfiles/sub-{candid}_ses-{visit}_scans.json"
    },
    {
      "Candidate": {candid},
      "PSCID"    : {pscid]},
      "Visit"    : {visit},
      "TsvLink"  : "/candidates/{candid}/{visit}/bidsfiles/sub-{candid}_ses-{visit}_scans.tsv",
      "JsonLink" : "/candidates/{candid}/{visit}/bidsfiles/sub-{candid}_ses-{visit}_scans.json"
    },
    ...
  ],
  "images": [
    {
      "Candidate": {candid},
      "PSCID"    : {pscid]},
      "Visit"    : {visit},
      "Subfolder": {subfolder},
      "NiftiLink": "/candidates/{candid}/{visit}/images/{filename.mnc}/bids/nifti",
      "JsonLink" : "/candidates/{candid}/{visit}/images/{filename.mnc}/bids/json",
      "BvalLink" : "/candidates/{candid}/{visit}/images/{filename.mnc}/bids/bval",
      "BvecLink" : "/candidates/{candid}/{visit}/images/{filename.mnc}/bids/bvec",
      "EventLink": "/candidates/{candid}/{visit}/images/{filename.mnc}/bids/event"
            
    }
  ]
  
}
```



## 2) create the bids project level file endpoints that will download the project level BIDS files

```
api/v0.0.3-dev/projects/loris/bids/dataset_description.json
api/v0.0.3-dev/projects/loris/bids/README
api/v0.0.3-dev/projects/loris/bids/.bids-validatory-config.json
api/v0.0.3-dev/projects/loris/bids/participants.tsv
api/v0.0.3-dev/projects/loris/bids/participants.json
```

## 3) create the session bids endpoints to download the session level files

#### 3.1. modify the visit endpoint to add bids_session_files

`api/v0.0.3-dev/candidates/{candid}/{visit}/` 

will return:
```json
{
  "Meta": {
    "CandID"    : {candid},
    "Visit"     : {visit},
    "Site"      : {site},
    "Battery"   : {battery},
    "Age_at_MRI": {age_at_mri}
  },
  "Stages":[],
  "BidsFiles": {
    "TsvLink" : "api/v0.0.3-dev/candidates/{candid}/{visit}/bidsfiles/sub-{candid}_ses-{visit}_scans.tsv",
    "JsonLink": "api/v0.0.3-dev/candidates/{candid}/{visit}/bidsfiles/sub-{candid}_ses-{visit}_scans.json"
  }
}
```

#### 3.2. create the bids download endpoints

```
api/v0.0.3-dev/candidates/{candid}/{visit}/bidsfiles/sub-{candid}_ses-{visit}_scans.tsv
api/v0.0.3-dev/candidates/{candid}/{visit}/bidsfiles/sub-{candid}_ses-{visit}_scans.json
```


## 4) create the image bids endpoints to download the images


4.1. create a bids endpoints that will return the link to the image and json file


`api/v0.0.3-dev/candidates/{candid}/{visit}/images/filename.mnc/bids/` 


will return:
```json
{
   "Meta": {
     "CandID"    : {candid},
     "Visit"     : {visit},
     "Filename"  : {filename.mnc},
   },
   "Files" : [
     {
       "Subfolder": {bids_subfolder_type},  // anat, func, asl...
       "NiftiLink": "/candidates/{candid}/{visit}/images/{filename.mnc}/bids/nifti",
       "JsonLink" : "/candidates/{candid}/{visit}/images/{filename.mnc}/bids/json" 
     },
     {
       "Subfolder": {bids_subfolder_type},  // anat, func, asl...
       "NiftiLink": "/candidates/{candid}/{visit}/images/{filename.mnc}/bids/nifti",
       "JsonLink" : "/candidates/{candid}/{visit}/images/{filename.mnc}/bids/json" 
     },
     ...
}
```

Note the bids_subfolder_type corresponds to "anat", "func", "asl"... subfolders present
in the visit folder of a BIDS dataset to organize the images

