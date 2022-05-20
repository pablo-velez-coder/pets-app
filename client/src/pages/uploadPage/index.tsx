import { CloseCircleOutlined, FileImageOutlined, UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import {useDropzone, FileWithPath} from 'react-dropzone';
import { UploadPetForm } from '../../components/upload-pet-form';
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd'
import styles from './styles.module.scss';

export const UploadPage = () => {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const [photos, setPhotos] = useState<FileWithPath[]>([]);
    const [isFormView, setIsFormView] = useState<boolean>(false);

    const onDragEnd = (result: DropResult)=>{
        const items= [...photos]
        const [m] = items.splice(result.source.index,1)
        items.splice( result.destination!.index  ,0, m)
        setPhotos(items)
    }

    useEffect(() => {
        setPhotos(prev=>[...prev,...acceptedFiles])
    }, [acceptedFiles]);

const removePhoto = (path:string) =>{
    setPhotos(photos.filter(photo=>photo.path !== path))
}
    const files = photos?.map((file: FileWithPath, index) => (
      <Draggable draggableId={file.path || Date.now().toString()} index={index}>
        {(provided)=>(
          <li 
          
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={styles.UploadPageFilesFile} key={file?.path}>
          <div>
          
        <p><span>
        <FileImageOutlined />
            </span> {file.path}</p>
          </div>
         <div onClick={()=>file.path && removePhoto(file.path)}>
         <CloseCircleOutlined />
         </div>
       </li>
        )}
      </Draggable>
      ));

  return <div className={styles.UploadPage}>
    {!isFormView ?  <>
      <h1>Subir mascota</h1>
        <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Arrastra o carga fotos de la mascota</p>
        <UploadOutlined />
      </div>
      <aside className={styles.UploadPageFiles}>
      <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
      droppableId="imagesList"
      >
        {(provided)=>(
          <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          >{files}</ul> 
        )} 
       
      </Droppable>
        
      </DragDropContext>
      </aside>
      <section
      onClick={()=>setIsFormView(true)}
      className={styles.UploadPageNext}>
          <button>Next</button>
      </section>
      </>:
      <>
      <UploadPetForm />
      </>
      }
  </div>;
};